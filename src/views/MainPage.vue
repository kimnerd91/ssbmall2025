<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <MSwiper />
    <div
      class="newItems"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h3 class="fw-700">신상품</h3>
      <!-- Loop 8 times and repeat the single item -->
      <div class="itemWrap col-xl-12">
        <div
          class="ItemBoxes col-xl-3 col-6"
          v-for="(item, i) in repeatedItems"
          :key="i"
        >
          <router-link :to="item.url">
            <img class="ogImg" :src="item.img" alt="기본이미지" />
            <img
              class="changeImg"
              data-aos="flip-left"
              :src="item.anotherImg"
              alt="오버이미지"
            />
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
                 <button type="button" class="col-8 btn-primary"><router-link to="/order">바로구매</router-link> </button>
              </div>
            </div>
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
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="event"
      ref="event"
      :class="{ 'scaled-up': isScaledUp, 'scaled-down': isScaledDown }"
    >
      <h3 class="fw-700">이벤트</h3>
      <ESwiper />
    </div>
    <div
      class="bestItems"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <h3 class="fw-700">베스트</h3>
      <!-- Loop 8 times and repeat the single item -->
      <div class="itemWrap">
        <div
          class="ItemBoxes col-xl-3 col-6"
          v-for="(item, i) in repeatedItems2"
          :key="i"
        >
          <router-link :to="item.url">
            <img class="ogImg" :src="item.img" alt="기본이미지" />
            <img
              class="changeImg"
              data-aos="flip-left"
              :src="item.anotherImg"
              alt="오버이미지"
            />
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
          </router-link>
          <div class="itemsButton col-12">
            <div class="d-flex">
              <button type="button" class="col-4 btn-secondary">
                <i class="fa-sharp fa-light fa-bag-shopping"></i>
              </button>
               <button type="button" class="col-8 btn-primary"><router-link to="/order">바로구매</router-link> </button>
            </div>
          </div>
          <div class="itemWish">
            <button
              type="button"
              @click="toggleHeart(i)"
              :class="{ active: wishList[i] }"
              data-bs-toggle="modal"
                data-bs-target="#wishalert"
            >
              <i class="fa-solid fa-heart"></i>
            </button>
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
/* eslint-disable */
import MSwiper from "@/components/MainSwiper";
import ESwiper from "@/components/EventSwiper";
import SSwiper from "@/components/SmallBanner";
export default {
  name: "Main",
  components: {
    MSwiper,
    ESwiper,
    SSwiper,
  },
  data() {
    return {
      lastScrollPosition: 0, // Store the last scroll position to detect direction
      scrollDirection: "", // Track the scroll direction (up or down)
      isScaledUp: false, // Track if the event section should be scaled up
      isScaledDown: false, // Track if the event section should be scaled down
      mouseover: false,
      wishList: [],
      NewItems: [
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
        },
      ],
      bestItems: [
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
        },
      ],
    };
  },
  methods: {
    toggleHeart(index) {
      // Toggle the wishList state for the given index
      this.wishList[index] = !this.wishList[index];
    },
    checkScrollPosition() {
      const eventElement = this.$refs.event;
      if (!eventElement) return;

      const rect = eventElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Detect scroll direction
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.scrollDirection = "down"; // Scrolling down
      } else if (currentScrollPosition < this.lastScrollPosition) {
        this.scrollDirection = "up"; // Scrolling up
      }
      this.lastScrollPosition = currentScrollPosition;

      // If the element is halfway through the screen, apply the scale effect
      if (rect.top <= windowHeight / 1.55) {
        if (this.scrollDirection === "down") {
          this.isScaledUp = true;
          this.isScaledDown = false;
        } else if (this.scrollDirection === "up") {
          this.isScaledUp = false;
          this.isScaledDown = true;
        }
      } else {
        this.isScaledUp = false;
        this.isScaledDown = false;
      }
    },
    formatPrice(price) {
      return price.toLocaleString();
    },
  },
  computed: {
    repeatedItems() {
      return Array(8)
        .fill(null)
        .map(() => ({ ...this.NewItems[0] }));
    },
    repeatedItems2() {
      return Array(8)
        .fill(null)
        .map(() => ({ ...this.bestItems[0] }));
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkScrollPosition);
    this.checkScrollPosition(); // Initial check
    this.wishList = Array(this.repeatedItems.length).fill(false);
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScrollPosition);
  },
};
</script>
