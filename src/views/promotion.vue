<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
    <div class="promotion">
      <div>
        <h1 class="fw-900">{{ promotion.name }}</h1>
        <div class="promotionWrap" data-aos="fade-up" data-aos-duration="1500">
          <div
            class="promotionBanner"
            :style="{ backgroundImage: 'url(' + promotion.img + ')' }"
          ></div>
          <div>
            <nav>
              <ul>
                <li v-for="(category, index) in uniqueCategories" :key="index">
                  <button
                    type="button"
                    class="fw-300"
                    :class="{ active: selectedCategory === category }"
                    @click="selectedCategory = category"
                  >
                    {{ category }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div class="itemWrap col-xl-12 col-sm-12">
            <div
              class="itemBoxes col-xl-3 col-sm-6 col-6"
              v-for="(item, i) in filteredPromotionData"
              :key="i"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <router-link to="/">
                <img class="ogImg" :src="item.img" alt="기본이미지" />
                <img class="changeImg" :src="item.anotherImg" />
                <div class="itemsInfo">
                  <h5 class="fw-500">{{ item.name }}</h5>
                  <p class="fw-400">{{ item.text }}</p>
                  <h6 class="fw-500">￦ {{ formatPrice(item.price) }}</h6>
                  <span class="fw-300">￦ {{ formatPrice(item.OGprice) }}</span>
                </div>
                <div class="itemsDiscount">
                  <p class="fw-400">{{ item.discount }}</p>
                  %
                </div>
                <div class="itemsButton col-12">
                  <div class="d-flex">
                    <button type="button" class="col-4 btn-secondary">
                      <i class="fa-sharp fa-light fa-bag-shopping"></i>
                    </button>
                    <button type="button" class="col-8 btn-primary">바로구매</button>
                  </div>
                </div>
              </router-link>
              <div class="itemWish">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#wishalert"
                  @click="toggleHeart(i)"
                  :class="{ active: wishList[i] }"
                >
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="smallBanner"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      <SSwiper />
    </div>
  </main>

  <!-- 모달 -->

  <div
    class="modal fade"
    id="wishalert"
    tabindex="-1"
    aria-labelledby="wishalertLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center fw-900">위시리스트 저장 완료</h3>
          <p class="text-center fw-300">위시리스트에 제품이 저장되었습니다.</p>
        </div>
        <div class="modal-footer single">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SSwiper from "@/components/SmallBanner";
export default {
  name: "promotion",
  components: {
    SSwiper,
  },
  data() {
    return {
      promotion: {
        id: 0,
        name: "프로모션 이름이 들어갈 공간 입니다.",
        img: "https://i.pinimg.com/736x/1d/7e/21/1d7e214d5b996eb96c7f050926c74753.jpg",
      },
      selectedCategory: "",
      promotionData: [
        {
          img:
            "https://balenciaga.dam.kering.com/m/4ff5333607d8fee4/Large-835839TSVP99012_G.jpg?v=2",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/68d84204adbfaafa/Large-835839TSVP99012_J.jpg?v=1",
          category: "A",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/43abeff9b1e6071f/Small-544351W2GA15760_X.jpg?v=3",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/1ed2ff42d980d130/Small-544351W2FB11000_X.jpg?v=3",
          category: "b",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/4ff5333607d8fee4/Large-835839TSVP99012_G.jpg?v=2",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/68d84204adbfaafa/Large-835839TSVP99012_J.jpg?v=1",
          category: "c",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/4ff5333607d8fee4/Large-835839TSVP99012_G.jpg?v=2",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/68d84204adbfaafa/Large-835839TSVP99012_J.jpg?v=1",
          category: "A",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/43abeff9b1e6071f/Small-544351W2GA15760_X.jpg?v=3",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/1ed2ff42d980d130/Small-544351W2FB11000_X.jpg?v=3",
          category: "b",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/4ff5333607d8fee4/Large-835839TSVP99012_G.jpg?v=2",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/68d84204adbfaafa/Large-835839TSVP99012_J.jpg?v=1",
          category: "c",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/43abeff9b1e6071f/Small-544351W2GA15760_X.jpg?v=3",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/1ed2ff42d980d130/Small-544351W2FB11000_X.jpg?v=3",
          category: "b",
        },
        {
          img:
            "https://balenciaga.dam.kering.com/m/4ff5333607d8fee4/Large-835839TSVP99012_G.jpg?v=2",
          name: "제품명이 들어갈 자리입니다.",
          text: "제품 설명이 들어갈 자리입니다.",
          price: 10000,
          OGprice: 20000,
          discount: 50,
          url: "/productList",
          anotherImg:
            "https://balenciaga.dam.kering.com/m/68d84204adbfaafa/Large-835839TSVP99012_J.jpg?v=1",
          category: "c",
        },
      ],
      wishList: [],
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString();
    },
    toggleHeart(index) {
      // Toggle the wishList state for the given index
      this.wishList[index] = !this.wishList[index];
    },
  },
  computed: {
    uniqueCategories() {
      // 중복 제거한 카테고리 목록 반환
      return [...new Set(this.promotionData.map((item) => item.category))];
    },
    filteredPromotionData() {
      // 카테고리가 선택되지 않으면 모든 데이터를 반환
      return this.selectedCategory
        ? this.promotionData.filter((item) => item.category === this.selectedCategory)
        : this.promotionData;
    },
  },
};
</script>
