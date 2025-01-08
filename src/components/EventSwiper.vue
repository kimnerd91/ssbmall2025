<template>
  <div>
    <swiper
      :slidesPerView="swiperOptions.breakpoints.slidesPerView"
      :breakpoints="swiperOptions.breakpoints"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :loop="true"
    >
      <swiper-slide v-for="(aaa, i) in event" :key="i">
        <router-link :to="{ name: '이벤트상세', params: { id: aaa.id } }">
          <div class="eventWrap">
            <div class="eventBoxes">
              <div
                class="eventImg"
                :style="{ backgroundImage: 'url(' + aaa.img + ')' }"
              ></div>
              <div class="eventInfo text-left">
                <h6 class="fw-500">{{ aaa.title }}</h6>
                <p class="fw-400">{{ aaa.text }}</p>
                <span class="fw-400">{{ aaa.date }}</span>
              </div>
            </div>
          </div>
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
import tlopevent from "@/assets/img/tlopevent.png";
import tlopevent2 from "@/assets/img/tlopevent2.png";
import tlopevent3 from "@/assets/img/tlopevent3.png";
import tlopevent4 from "@/assets/img/tlopevent4.png";

export default {
  name: "EventSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {

        autoplay: {
          delay: 3000, // 3 seconds between transitions
          disableOnInteraction: false, // Don't stop autoplay on interaction
        },
        navigation: true, // Enable navigation arrows
        pagination: {
          clickable: true, // Enable clickable pagination
        },
        breakpoints: {
          1028: {
            spaceBetween: 58, // No space for fade effect
            slidesPerView: 3
          },
          480: {
            spaceBetween: 8,
            slidesPerView: 1
          },
        },
      },
      event: [
        {
          id: 0,
          title: "이벤트 명이 들어갈 곳입니다.",
          text: "이벤트 설멸이 들어갈 곳입니다.",
          date: "2020-20-20",
          img: tlopevent,
        },
        {
          id: 1,
          title: "이벤트 명이 들어갈 곳입니다.",
          text: "이벤트 설멸이 들어갈 곳입니다.",
          date: "2020-20-20",
          img: tlopevent2,
        },
        {
         id: 2,
          title: "이벤트 명이 들어갈 곳입니다.",
          text: "이벤트 설멸이 들어갈 곳입니다.",
          date: "2020-20-20",
          img: tlopevent3,
        },
        {
        id: 3,
          title: "이벤트 명이 들어갈 곳입니다.",
          text: "이벤트 설멸이 들어갈 곳입니다.",
          date: "2020-20-20",
          img: tlopevent4,
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
