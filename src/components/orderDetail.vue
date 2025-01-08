<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="mx-auto">
      <h1 class="ohMain text-center fw-700">주문 상세 정보</h1>
      <div class="orderN col-xl-12 col-sm-11 col-11 d-flex justify-content-between  mx-auto align-items-center">
        <div>
          <p class="fw-400">주문번호 [{{ order.number }}]</p>
        </div>
        <div>
          <p class="fw-400">{{ order.date }}</p>
        </div>
      </div>
      <div class="odTable col-12">
        <table>
          <thead>
            <th>주문일자</th>
            <th>이미지</th>
            <th>상품정보</th>
            <th>상품구매금액</th>
            <th>주문처리상태</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <p class="fw-400">{{ order.date }}</p>
                <span>[{{ order.number }}]</span>
              </td>
              <td>
                <img :src="order.img" alt="상품 이미지" />
              </td>
              <td class="fw-500">{{ order.name }}</td>
              <td class="fw-500">{{ formatPrice(order.price) }}</td>
              <td>
                <h6 class="fw-400">{{ order.delivary }}</h6>
                <p v-if="order.deliCompany !== ''">
                  {{ order.deliCompany }} <span>[{{ order.deliNumber }}]</span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mobileList">
        <div class="moWrap">
          <div class="moListHeader">
            <div class="d-flex align-items-center justify-content-between col-11 mx-auto">
              <p class="fw-400">{{ order.date }}</p>
              <span>[{{ order.number }}]</span>
            </div>
          </div>
          <div class="moBody d-flex align-items-center justify-content-around">
            <img :src="order.img" alt="" />
            <div class="text-left">
              <span class="name fw-700">{{ order.name }}</span>
              <p class="fw-500 price">￦ {{ formatPrice(order.price) }}</p>
              <div class="deli d-flex align-items-center gap-2">
                <h6 class="fw-400">{{ order.delivary }}</h6>
                <p v-if="order.deliCompany !== ''">
                  {{ order.deliCompany }} <span> [{{ order.deliNumber }}] </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="odDiv">
        <h2 class="fw-700">배송정보</h2>
        <ul>
          <li>
            <h6 class="fw-700">수령자명</h6>
            <p class="fw-400">수령자 이름입니다.</p>
          </li>
          <li>
            <h6 class="fw-700">수령자 연락처</h6>
            <p class="fw-400">010-000-0000</p>
          </li>
          <li>
            <h6 class="fw-700">배송지 주소</h6>
            <p class="fw-400">서울특별시 금천구 가산3로 272 108동 502호</p>
          </li>
        </ul>
      </div>
      <div class="odDiv">
        <h2 class="fw-700">결제정보</h2>
        <ul>
          <li>
            <h6 class="fw-700">결제방식</h6>
            <p class="fw-400">카드결제</p>
          </li>
          <li>
            <h6 class="fw-700">결제정보</h6>
            <p class="fw-400">하나카드 / 일시불</p>
          </li>
          <li>
            <h6 class="fw-700">상품금액</h6>
            <p class="fw-400">￦ {{ formatPrice(order.price) }}</p>
          </li>
          <li>
            <h6 class="fw-700">배송비</h6>
            <p class="fw-400">무료배송</p>
          </li>
          <li>
            <h6 class="fw-700">총 결제금액</h6>
            <p class="fw-400">￦ {{ formatPrice(order.price) }}</p>
          </li>
        </ul>
      </div>
      <div class="odDiv cs">
        <h2 class="fw-700">고객센터</h2>
        <ul>
          <li class="flex-column justify-content-start">
            <p class="fw-400">평일 오전 10:00 ~ 오후 18: 00</p>
            <p class="fw-400">(점심시간 오후 12:00 ~ 13:30)</p>
          </li>
          <li><p class="fw-400">02-000-0000</p></li>
          <li>
            <router-link to="/Inquiry" class="fw-400">1:1 문의 바로가기</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OrderDetail",
  computed: {
    order() {
      return {
        date: this.$route.query.date || "정보 없음",
        number: this.$route.query.number || "정보 없음",
        img: this.$route.query.img || "",
        name: this.$route.query.name || "정보 없음",
        price: Number(this.$route.query.price) || 0,
        delivary: this.$route.query.delivary || "정보 없음",
        deliCompany: this.$route.query.deliCompany || "",
        deliNumber: this.$route.query.deliNumber || "",
      };
    },
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>
