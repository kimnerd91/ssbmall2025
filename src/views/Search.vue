<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
    <div class="product">
      <div class="productHeader d-flex justify-content-between align-items-center">
        <div class="searchBreadcrumbs d-flex align-items-center">
          <p class="fw-700">검색어</p>
          <h4 class="fw-700">"{{ query }}"</h4>
        </div>
        <div class="productButton d-flex align-items-center gap-2">
          <div class="productNumbers fw-400">표시 제품 {{ listCount }}</div>
          <button
            type="button"
            class="d-flex align-items-center gap-2"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <p class="fw-400">필터</p>
            <i class="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </div>
      <div class="productBody">
        <div class="itemWrap col-xl-12 col-sm-12">
          <div
            class="itemBoxes col-xl-3 col-sm-6 col-6"
            v-for="(item, i) in displayedProducts"
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
      <button
        type="button"
        class="btn-primary col-xl-4 col-sm-12 col-10 loadedButton fw-300"
        @click="loadMore"
        v-if="hasMoreItems"
      >
        더 많은 제품 불러오기
      </button>
    </div>
  </main>

  <!-- 오프캔버스 필터 -->
  <div
    class="offcanvas offcanvas-start offFilter"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">필터</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              가격
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <ul>
                <li v-for="(option, index) in options" :key="index">
                  <label class="d-flex align-items-center gap-3">
                    <input type="radio" :name="'sortOption'" :value="option.value" />
                    <p>{{ option.label }}</p>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "검색상품리스트",
  components: {},
  data() {
    return {
      query: "",
      listCount: 0,
      itemsPerPage: 8,
      currentPage: 1,
      options: [
        { value: "오름차순", label: "오름차순" },
        { value: "내림차순", label: "내림차순" },
        { value: "최신순", label: "최신순" },
        { value: "할인율순", label: "할인율순" },
      ],
      productList: [
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
    loadMore() {
      // Increase the page number to load more items
      this.currentPage++;
    },
  },
  computed: {
    listCount() {
      // Dynamically calculate the count of products
      return this.productList.length;
    },
    displayedProducts() {
      // Dynamically compute the products to display
      return this.productList.slice(0, this.currentPage * this.itemsPerPage);
    },
    hasMoreItems() {
      // Check if there are more items to load
      return this.displayedProducts.length < this.productList.length;
    },
  },
  created() {
    this.query = this.$route.query.q || ""; // Get the search query from the route
  },
};
</script>
