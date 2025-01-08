<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="mx-auto">
      <h1 class="ohMain text-center fw-900">주문내역조회</h1>
      <div class="col-12">
        <div
          class="text-left ohListDiv col-xl-12 col-lg-11 col-md-11 col-sm-11 col-11 mx-auto"
        >
          <ul class="d-flex align-items-center gap-4">
            <li
              class="fw-700"
              :class="{ active: activeTab === 'yesList' }"
              @click="changeTab('yesList')"
            >
              주문내역조회 ({{ pList.length }})
            </li>
            <li
              class="fw-700"
              :class="{ active: activeTab === 'noList' }"
              @click="changeTab('noList')"
            >
              취소/반품/교환 (0)
            </li>
          </ul>
        </div>
        <div id="yesList" v-if="activeTab === 'yesList'" class="tableDiv col-12">
          <table>
            <thead>
              <th>
                <p>주문일자</p>
                <span>(주문번호)</span>
              </th>
              <th>이미지</th>
              <th class="col-6">상품정보</th>
              <th>상품구매금액</th>
              <th>주문처리상태</th>
            </thead>
            <tbody>
              <tr v-for="(aaa, i) in pList" :key="i" @click="goToDetail(aaa)">
                <td>
                  <p class="fw-400">{{ aaa.date }}</p>
                  <span>[{{ aaa.number }}]</span>
                </td>
                <td>
                  <img :src="aaa.img" alt="" @click="goToDetail(aaa)" />
                </td>
                <td class="fw-500">
                  <span @click="goToDetail(aaa)">{{ aaa.name }}</span>
                </td>
                <td class="fw-500">{{ formatPrice(aaa.price) }}</td>
                <td>
                  <h6 class="fw-400">{{ aaa.delivary }}</h6>
                  <p v-if="aaa.deliCompany !== ''">
                    {{ aaa.deliCompany }} <span> [{{ aaa.deliNumber }}] </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="mobileList">
            <div
              class="moWrap"
              v-for="(aaa, i) in pList"
              :key="i"
              @click="goToDetail(aaa)"
            >
              <div class="moListHeader">
                <div
                  class="d-flex align-items-center justify-content-between col-11 mx-auto"
                >
                  <p class="fw-400">{{ aaa.date }}</p>
                  <span>[{{ aaa.number }}]</span>
                </div>
              </div>
              <div class="moBody d-flex align-items-center justify-content-around">
                <img :src="aaa.img" alt="" @click="goToDetail(aaa)" />
                <div class="text-left">
                  <span class="name fw-700" @click="goToDetail(aaa)">{{ aaa.name }}</span>
                  <p class="fw-500 price">￦ {{ formatPrice(aaa.price) }}</p>
                  <div class="deli d-flex align-items-center gap-2">
                    <h6 class="fw-400">{{ aaa.delivary }}</h6>
                    <p v-if="aaa.deliCompany !== ''">
                      {{ aaa.deliCompany }} <span> [{{ aaa.deliNumber }}] </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="noList" v-if="activeTab === 'noList'" class="tableDiv col-12">
          <h5>해당되는 내역이 없습니다</h5>
        </div>
      </div>
    </div>
  </main>
  <!-- <OrderDetail /> -->
</template>
<script>
// import OrderDetail from "./orderDetail"
export default {
  name: "",
  components: {
    // OrderDetail,
  },
  data() {
    return {
      activeTab: "yesList",
      pList: [
        {
          date: "2024-12-31",
          number: "2024123101010102",
          img:
            "https://balenciaga.dam.kering.com/m/6c722f8913e47b23/Large-804921WHIKE2070_F.jpg?v=2",
          name: "남성 하이크 스니커즈 베이지/오렌지",
          price: 2152000,
          delivary: "배송중",
          deliCompany: "CJ대한통운",
          deliNumber: "424524212142",
        },
        {
          date: "2024-12-30",
          number: "202412310152422",
          img:
            "https://balenciaga.dam.kering.com/m/46dbd0d29b7094b1/Large-822777TRS011000_F.jpg?v=1",
          name: "남성 바스켓볼 시리즈 - 보머 블랙/화이트",
          price: 12000000,
          delivary: "배송준비중",
          deliCompany: "",
          deliNumber: "",
        },
        {
          date: "2024-12-11",
          number: "2024123101010122",
          img:
            "https://balenciaga.dam.kering.com/m/32feed75c5cf2ee2/Large-818680TNW655760_F.jpg?v=1",
          name: "남성 오버사이즈 재킷 블루",
          price: 2950000,
          delivary: "배송완료",
          deliCompany: "CJ대한통운",
          deliNumber: "156121548213",
        },
      ],
      nList: {},
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
    formatPrice(price) {
      return price.toLocaleString();
    },
    goToDetail(order) {
      this.$router.push({
        path: "/orderDetail",
        query: {
          date: order.date,
          number: order.number,
          img: order.img,
          name: order.name,
          price: order.price,
          delivary: order.delivary,
          deliCompany: order.deliCompany,
          deliNumber: order.deliNumber,
        },
      });
    },
  },
};
</script>
