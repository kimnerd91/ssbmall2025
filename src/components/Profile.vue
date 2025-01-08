<template>
  <main class="profileMain col-xl-5 col-sm-12 mx-auto">
    <h1 class="text-center fw-900">교환/반품 신청</h1>
    <!-- 아이템 박스 -->
    <div>
      <h5 class="fw-700">대상 제품</h5>
      <div class="itemBox">
        <img src="" alt="" />
        <div>
          <h5 class="fw-700">{{ product.name }}</h5>
          <p class="option">{{ product.option }}</p>
          <p class="count"><span>수량 :</span>{{ product.count }}</p>
        </div>
        <em></em>

        <!-- 교환 환불 셀렉트 -->
        <div class="dropdown selectBox">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            :style="{ color: selectedOption ? 'black' : 'gray !important' }"
          >
            {{ selectedOption || "유형을 선택해 주세요." }}
          </button>
          <ul class="dropdown-menu">
            <li v-for="(item, i) in cnr.label" :key="i">
              <a class="dropdown-item" href="#" @click.prevent="selectOption(item)">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <div class="refundDiv inputWrap" v-if="refund">
          <!-- 환불 사유 -->
          <div class="refundBottom rfBox">
            <h6 class="fw-400">환불 사유를 선택해 주세요.</h6>
            <div class="labelBox">
              <label for="refundWhy1">
                <input type="radio" name="refundWhy" id="refundWhy1" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy2">
                <input type="radio" name="refundWhy" id="refundWhy2" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy3">
                <input type="radio" name="refundWhy" id="refundWhy3" />
                환불 사유가 들어갈 자리입니다.
              </label>
            </div>
            <div class="labelBox">
              <label for="refundWhy4">
                <input type="radio" name="refundWhy" id="refundWhy4" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy5">
                <input type="radio" name="refundWhy" id="refundWhy5" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy6">
                <input type="radio" name="refundWhy" id="refundWhy6" />
                환불 사유가 들어갈 자리입니다.
              </label>
            </div>
            <div class="labelBox">
              <label for="refundWhy7">
                <input type="radio" name="refundWhy" id="refundWhy7" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy8">
                <input type="radio" name="refundWhy" id="refundWhy8" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy9">
                <input type="radio" name="refundWhy" id="refundWhy9" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy10">
                <input type="radio" name="refundWhy" id="refundWhy10" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy11">
                <input type="radio" name="refundWhy" id="refundWhy11" />
                환불 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy12">
                <input type="radio" name="refundWhy" id="refundWhy12" />
                환불 사유가 들어갈 자리입니다.
              </label>
            </div>
          </div>
          <!-- 환불 사유 -->
          <div class="rfBox">
            <h6 class="fw-400">환불사유</h6>
            <textarea placeholder="상세한 환불 사유를 입력해주세요."></textarea>
          </div>
          <!-- 사진 파일 -->
          <div
            class="inputBox rfBox"
          >
            <h6 class="fw-400">사진첨부</h6>
            <div>
              <div class="fake">
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  @change="handleFileUpload"
                  multiple
                />
                <i class="fa-light fa-plus"></i>
              </div>
              <div
                class="fileBucket mt-4"
                v-if="imagePreviews.length > 0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <p class="fw-700">첨부 이미지</p>
                <div
                  class="imgWrap d-flex align-items-center justify-content-start gap-1 mt-4"
                >
                  <div
                    class="imgBox"
                    v-for="(imgSrc, index) in imagePreviews"
                    :key="index"
                    @mouseover="hoveredImage = index"
                    @mouseleave="hoveredImage = null"
                  >
                    <img :src="imgSrc" alt="Uploaded image" />
                    <button v-if="hoveredImage === index" @click="removeImage(index)">
                      <i class="fa-solid fa-trash-can-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 환불 계좌 -->
          <div class="refundAccount rfBox">
            <h6 class="fw-400">환불 계좌</h6>
            <div>
              <!-- 결제방식대로 환불 -->
              <label for="payRefund">
                <input
                  type="radio"
                  id="payRefund"
                  name="refundOption"
                  value="paymentMethod"
                  v-model="refundOption"
                />
                결제방식대로 환불
              </label>

              <!-- 선택한 계좌로 환불 -->
              <label for="paySelect">
                <input
                  type="radio"
                  id="paySelect"
                  name="refundOption"
                  value="selectedAccount"
                  v-model="refundOption"
                />
                선택한 계좌로 환불
              </label>

              <!-- 결제방식대로 환불 선택 시 -->
              <div v-if="refundOption === 'paymentMethod'">
                <input type="text" placeholder="카카오페이 결제" readonly />
              </div>

              <!-- 선택한 계좌로 환불 선택 시 -->
              <div v-if="refundOption === 'selectedAccount'">
                <h6 class="fw-400">계좌 선택</h6>
                <div></div>
                <input
                  type="text"
                  placeholder="환불 받을 은행의 계좌번호를 입력해주세요."
                />
              </div>
            </div>
          </div>

          <div class="rfBox">
            <h6 class="fw-400">환불 배송비 결제</h6>
            <ul>
              <li>환불 배송비는 환불금액에서 자동 차감됩니다.</li>
              <li>
                무료배송 시, 기존 배송비 + 환불 배송비가 합산되어 차감된 후, 환불됩니다.
              </li>
            </ul>
          </div>
          <div class="boxButton">
            <button type="button" class="btn-secondary">취소하기</button>
            <button type="button" class="btn-primary">환불신청하기</button>
          </div>
        </div>
        <div class="changeDiv inputWrap" v-if="change">
          <!-- 교환 사유 -->
          <div class="refundBottom rfBox">
            <h6 class="fw-400">교환 사유를 선택해 주세요.</h6>
            <div class="labelBox">
              <label for="refundWhy1">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy1"
                  v-model="changeWhy.option"
                  value="refundWhy1"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy2">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy2"
                  v-model="changeWhy.option"
                  value="refundWhy2"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy3">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy3"
                  v-model="changeWhy.option"
                  value="refundWhy3"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
            </div>
            <div class="labelBox">
              <label for="refundWhy4">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy4"
                  v-model="changeWhy.option"
                  value="refundWhy4"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy5">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy5"
                  v-model="changeWhy.option"
                  value="refundWhy5"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy6">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy6"
                  v-model="changeWhy.option"
                  value="refundWhy6"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
            </div>
            <div class="labelBox">
              <label for="refundWhy7">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy7"
                  v-model="changeWhy.option"
                  value="refundWhy7"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy8">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy8"
                  v-model="changeWhy.option"
                  value="refundWhy8"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy9">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy9"
                  v-model="changeWhy.option"
                  value="refundWhy9"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy10">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy10"
                  v-model="changeWhy.option"
                  value="refundWhy10"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy11">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy11"
                  v-model="changeWhy.option"
                  value="refundWhy11"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
              <label for="refundWhy12">
                <input
                  type="radio"
                  name="refundWhy"
                  id="refundWhy12"
                  v-model="changeWhy.option"
                  value="refundWhy12"
                />
                교환 사유가 들어갈 자리입니다.
              </label>
            </div>
          </div>
          <!-- 교환 사유 -->
          <div class="rfBox">
            <h6 class="fw-400">교환사유</h6>
            <textarea
              v-model="changeWhy.reason"
              placeholder="상세한 교환 사유를 입력해주세요."
            ></textarea>
          </div>
          <!-- 사진 파일 -->
          <div
            class="inputBox rfBox"
          >
            <h6 class="fw-400">사진첨부</h6>
            <div>
              <div class="fake">
                <input
                  type="file"
                  name="file"
                  accept="image/*"
                  @change="handleFileUpload"
                  multiple
                />
                <i class="fa-light fa-plus"></i>
              </div>
              <div
                class="fileBucket mt-4"
                v-if="imagePreviews.length > 0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <p class="fw-700">첨부 이미지</p>
                <div
                  class="imgWrap d-flex align-items-center justify-content-start gap-1 mt-4"
                >
                  <div
                    class="imgBox"
                    v-for="(imgSrc, index) in imagePreviews"
                    :key="index"
                    @mouseover="hoveredImage = index"
                    @mouseleave="hoveredImage = null"
                  >
                    <img :src="imgSrc" alt="Uploaded image" />
                    <button v-if="hoveredImage === index" @click="removeImage(index)">
                      <i class="fa-solid fa-trash-can-xmark"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 교환 상품 -->
          <div class="refundAccount rfBox">
            <h6 class="fw-400">교환 상품</h6>
            <div class="dropdown selectBox">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                :style="{ color: changeOption ? 'black' : 'gray !important' }"
              >
                {{ changeOptionConfirm || "유형을 선택해 주세요." }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="(item, i) in changeOption.label" :key="i">
                  <a class="dropdown-item" href="#" @click.prevent="selectOption2(item)">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="rfBox">
            <h6 class="fw-400">교환 배송비 결제</h6>
            <div>
              <!-- 선택한 계좌로 교환 -->
              <label for="paySelect">
                <input
                  type="radio"
                  id="paySelect"
                  name="refundOption"
                  value="kakao"
                  checked
                  v-model="refundOption"
                />
                카카오페이 결제
              </label>

              <!-- 결제방식대로 교환 선택 시 -->
              <div class="refundBtn">
                <button type="button">결제하기</button>
              </div>
            </div>
          </div>
          <div class="boxButton">
            <button type="button" class="btn-secondary">취소하기</button>
            <button type="button" class="btn-primary">교환신청하기</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "프로필",

  data() {
    return {
      product: {
        name: "제품명이 들어갈 지리입니다.",
        option: "블랙",
        count: 1,
      },
      selectedOption: "",
      cnr: {
        label: ["교환", "환불"],
      },
      imagePreviews: [],
      refund: false, // 환불 상태
      change: false, // 교환 상태
      refundOption: "",
      changeOption: {
        label: ["A", "B"],
      },
      changeOptionConfirm: "",
      changeWhy: {
        option: "",
        reason: "",
        file: "",
        changeProduct: "",
      },
    };
  },
  methods: {
    selectOption(item) {
      this.selectedOption = item; // 선택한 옵션을 저장
      this.refund = item === "환불";
      this.change = item === "교환";
    },
    selectOption2(item) {
      this.changeOptionConfirm = item; // 선택한 옵션을 저장
    },
    handleFileUpload(event) {
      const files = Array.from(event.target.files); // Convert the FileList to an array
      this.changeWhy.file = files; // Store the file objects

      // Clear existing previews
      this.imagePreviews = [];

      // Generate preview URLs
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreviews.push(e.target.result); // Push the image data URL to the array
        };
        reader.readAsDataURL(file);
      });
    },
  },
};
</script>
