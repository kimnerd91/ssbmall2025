<template>
  <div class="smWrap">
    <swiper
      class="col-xl-12"
      :slidesPerView="swiperOptions.breakpoints.slidesPerView"
      :breakpoints="swiperOptions.breakpoints"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide class="col-xl-6 col-sm-12" v-for="(aaa, i) in bannerImg" :key="i">
        <router-link :to="{ name: '이벤트상세', params: { id: aaa.id } }">
          <div
            class="smallBanner"
            :style="{ backgroundImage: 'url(' + aaa.img + ')' }"
          ></div>
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  name: "SmallSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2, // Only one slide visible at a time
        spaceBetween: 0, // No space for fade effect
        loop: true, // Enable looping
        effect: "fade", // Use fade effect
        fadeEffect: {
          crossFade: true, // Smooth fade transitions
        },
        autoplay: {
          delay: 1000, // 3 seconds between transitions
        },
        navigation: false, // Enable navigation arrows
        pagination: {
          clickable: true, // Enable clickable pagination
        },
        breakpoints: {
          1028: {
            slidesPerView: 2
          },
          480: {
            slidesPerView: 1
          },
        },
      },
      bannerImg: [
        {
          id: 0,
          img: "https://i.pinimg.com/736x/de/da/a2/dedaa2e29f0a5bd6db54028bb799376d.jpg",
        },
        {
          id: 1,
          img: "https://i.pinimg.com/736x/f1/a9/1b/f1a91be0847e489deb83663271eec660.jpg",
        },
        {
          id: 2,
          img: "https://i.pinimg.com/736x/d9/72/89/d9728919b6ad7e45f66bbe6a1b310137.jpg",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
};
</script>
