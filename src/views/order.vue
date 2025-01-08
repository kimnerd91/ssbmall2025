<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
    <div class="orderWrap">
      <div class="orderHeader">
        <ul>
          <li>
            <p :class="{ 'fw-900': currentStep === 1 }">1. 주문정보입력</p>
          </li>
          <li>
            <p :class="{ 'fw-900': currentStep === 2 }">2. 결제</p>
          </li>
          <li>
            <p :class="{ 'fw-900': currentStep === 3 }">3. 주문완료</p>
          </li>
        </ul>
      </div>
      <div class="orderBody d-flex">
        <div class="orderLeft col-xl-7">
          <div v-if="currentStep === 1" class="step1">
            <div>
              <label class="fw-900">이메일</label>
              <input
                ref="emailInput"
                type="text"
                v-model="delivaryInfo.email"
                placeholder="이메일을 입력해주세요."
              />
            </div>
            <div>
              <label class="fw-900">받으시는 분</label>
              <input
                ref="nameInput"
                type="text"
                v-model="delivaryInfo.name"
                placeholder="이름을 입력해주세요."
              />
            </div>
            <div>
              <label class="fw-900">전화번호</label>
              <input
                ref="phoneInput"
                type="telephone"
                v-model="delivaryInfo.phone"
                placeholder="전화번호를 입력해주세요. ex)01012345678"
              />
            </div>
            <div class="position-relative d-flex flex-column">
              <label class="fw-900">주소</label>
              <input
                ref="addressInput"
                class="mainAddress col-xl-6 col-12"
                type="text"
                v-model="delivaryInfo.address"
                readonly
                placeholder="주소찾기 버튼을 클릭해주세요."
                @click="openPostcode"
              />
              <input
                ref="plusAddressInput"
                class="plusAddress"
                type="text"
                v-model="delivaryInfo.plusAddress"
                placeholder="상세 주소를 입력해주세요."
              />
              <button class="position-absolute" type="button" @click="openPostcode">
                주소찾기
              </button>
            </div>
            <div class="extraDiv">
              <label class="fw-900">배송요청사항</label>
              <textarea v-model="delivaryInfo.extra"></textarea>
            </div>
            <button type="button" class="btn-primary" @click="handleNextStep">
              다음
            </button>
          </div>
          <div class="step2" v-else-if="currentStep === 2">
            <div>
              <h6 class="fw-700">이메일</h6>
              <p>{{ delivaryInfo.email }}</p>
            </div>
            <div class="dInfo">
              <h6 class="fw-700">배송</h6>
              <p>{{ delivaryInfo.name }}</p>
              <p>{{ delivaryInfo.phone }}</p>
              <p>{{ delivaryInfo.address }}</p>
              <p>{{ delivaryInfo.plusAddress }}</p>
            </div>
            <div>
              <h6 class="fw-700">결제수단</h6>
              <label class="fw-500" for="ssmPay"
                ><input type="radio" name="pay" id="ssmPay" v-model="pay" />상상몰
                페이</label
              >
              <label class="fw-500" for="kakaoPay"
                ><input type="radio" name="pay" id="kakaoPay" v-model="pay" />카카오
                페이</label
              >
              <label class="fw-500" for="naverPay"
                ><input type="radio" name="pay" id="naverPay" v-model="pay" />네이버
                페이</label
              >
            </div>
            <button type="button" class="btn-primary" @click="handleNextStep">
              결제하기
            </button>
          </div>
          <div class="step3" v-else-if="currentStep === 3">
            <h2 class="fw-900">주문이 확인되었습니다.</h2>
            <p class="col-xl-9 col-12 fw-300 confirmText">
              주문이 완료되었습니다. 주문번호는
              <span class="fw-900" @click="copyToClipboard('021512-151213151')"
                >021512-151213151</span
              >입니다. 배송까지는 최대 7영업일이 소요될 수 있으며, 어쩌구저쩌구해서
              이러이러하게 됩니다.
            </p>
            <div>
              <h6 class="fw-700">이메일</h6>
              <p>{{ delivaryInfo.email }}</p>
            </div>
            <div class="dInfo">
              <h6 class="fw-700">배송</h6>
              <p>{{ delivaryInfo.name }}</p>
              <p>{{ delivaryInfo.phone }}</p>
              <p>{{ delivaryInfo.address }}</p>
              <p>{{ delivaryInfo.plusAddress }}</p>
            </div>
            <div>
              <h6 class="fw-700">결제방식</h6>
              <p>{{ pay }}</p>
            </div>
            <em></em>
            <div class="d-flex btns">
              <button class="btn-secondary" type="button">주문상세보기</button>
              <button class="btn-primary" type="button"><router-link to="/productList">쇼핑계속하기</router-link> </button>
            </div>
          </div>
        </div>
        <div class="orderRight col-xl-5">
          <label class="text-left fw-900">주문요약</label>
          <div
            class="d-flex align-items-center itemBox"
            v-for="(item, i) in orderItem"
            :key="i"
          >
            <img :src="item.img" alt="" />
            <div>
              <h6 class="fw-700">{{ item.name }}</h6>
              <span class="fw-400">{{ item.option }}</span>
              <div class="d-flex gap-2">
                <span class="fw-400">수량</span>
                <p class="fw-400">x {{ item.count }}</p>
              </div>
              <p class="fw-700 price">
                <span class="fw-300">￦</span> {{ formatPrice(item.price) }}
              </p>
            </div>
          </div>
          <div class="priceBox">
            <ul>
              <li class="d-flex align-items-center justify-content-between">
                <p class="fw-400">소계</p>
                <p class="fw-700">￦ {{ formatPrice(totalPrice) }}</p>
              </li>
              <li class="d-flex align-items-center justify-content-between">
                <p class="fw-400">배송</p>
                <p class="fw-700">￦ {{ formatPrice(delivaryPrice) }}</p>
              </li>
              <em></em>
              <li class="d-flex align-items-center justify-content-between">
                <h6 class="fw-700">총계</h6>
                <p class="fw-700">￦ {{ formatPrice(delivaryPrice + totalPrice) }}</p>
              </li>
            </ul>
          </div>
          <div class="d-flex align-items-center justify-content-between rightBox">
            <p class="fw-700">도움이 필요하세요?</p>
            <div>
              <p class="fw-400">고객센터 010-3270-2978</p>
              <span class="fw-300">(월요일 ~ 금요일, 오전 10시 ~ 오후 6시)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "order",
  components: "",
  data() {
    return {
      currentStep: 1,
      delivaryInfo: {
        name: "",
        email: "",
        phone: "",
        address: "",
        plusAddress: "",
        extra: "",
      },
      orderItem: [
        {
          img:
            "https://balenciaga.dam.kering.com/m/1aa34f018040a54e/Large-617196W2DB11013_F.jpg?v=6",
          name: "여성 스피드 2.0 모노컬러 리사이클드 니트 스니커즈 블랙",
          option: "41/Black",
          count: 1,
          price: 10000,
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/1aa34f018040a54e/Large-617196W2DB11013_F.jpg?v=6",
          name: "남성 스피드 2.0 모노컬러 리사이클드 니트 스니커즈 블랙",
          option: "43/Black",
          count: 1,
          price: 12000,
        },
      ],

      delivaryPrice: 3000,
      pay: "",
    };
  },
  computed: {
    totalPrice() {
      return this.orderItem.reduce((total, item) => {
        return total + item.price * item.count;
      }, 0);
    },
  },
  methods: {
    // 모든 필드가 채워졌는지 확인
    areAllFieldsFilled() {
      const { email, name, phone, address, plusAddress } = this.delivaryInfo;
      return email && name && phone && address && plusAddress; // extra는 선택사항으로 제외 가능
    },
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Order number copied to clipboard!");
        })
        .catch(() => {
          alert("Failed to copy order number. Please try again.");
        });
    },
    handleNextStep() {
      if (this.currentStep === 1) {
        const emptyFields = [];
        if (!this.delivaryInfo.email) {
          emptyFields.push("이메일");
          this.$refs.emailInput.style.borderBottom = "2px solid red";
        }
        if (!this.delivaryInfo.name) {
          emptyFields.push("받으시는 분");
          this.$refs.nameInput.style.borderBottom = "2px solid red";
        }
        if (!this.delivaryInfo.phone) {
          emptyFields.push("전화번호");
          this.$refs.phoneInput.style.borderBottom = "2px solid red";
        }
        if (!this.delivaryInfo.address) {
          emptyFields.push("주소");
          this.$refs.addressInput.style.borderBottom = "2px solid red";
        }
        if (!this.delivaryInfo.plusAddress) {
          emptyFields.push("상세 주소");
          this.$refs.plusAddressInput.style.borderBottom = "2px solid red";
        }

        if (emptyFields.length > 0) {
          alert(`다음 필드를 입력해주세요: ${emptyFields.join(", ")}`);
        } else {
          this.resetInputStyles();
          this.currentStep = 2; // Move to step 2
        }
      } else if (this.currentStep === 2) {
        if (!this.pay) {
          alert("결제 수단을 선택해주세요.");
        } else {
          this.currentStep = 3; // Move to step 3
        }
      }
    },

    resetInputStyles() {
      // Reset all input borders to default
      this.$refs.emailInput.style.borderBottom = "";
      this.$refs.nameInput.style.borderBottom = "";
      this.$refs.phoneInput.style.borderBottom = "";
      this.$refs.addressInput.style.borderBottom = "";
      this.$refs.plusAddressInput.style.borderBottom = "";
    },
    openPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.delivaryInfo.address = `(${data.zonecode}) ${data.roadAddress}`;
        },
      }).open();
    },
    formatPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>
