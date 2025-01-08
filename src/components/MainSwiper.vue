<template>
  <div class="mainSwiper">
    <swiper
      v-bind="swiperOptions"
      centered-slides
      :modules="modules"
      :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
      <swiper-slide v-for="(aaa, i) in bannerImg" :key="i">
        <router-link :to="aaa.url">
          <img :src="aaa.img" alt="" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";

// Register Swiper modules
import 'swiper/css';

  import 'swiper/css/effect-fade';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
    import { EffectFade, Navigation, Pagination, Autoplay,EffectCreative } from 'swiper/modules';

    import tlop1 from "@/assets/img/TLOP1.png";
    import tlop2 from "@/assets/img/TLOP2.png";
     import tlop3 from "@/assets/img/TLOP3.png";
    import tlopproduct from "@/assets/img/TLOPPRODUCT.png";

export default {
  name: "MainSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1, // Only one slide visible at a time
        spaceBetween: 0, // No space for fade effect
        loop: true, // Enable looping
        effect: "fade", // Use fade effect
        fadeEffect: {
          crossFade: true, // Smooth fade transitions
        },
        autoplay: {
          delay: 3000, // 3 seconds between transitions
          disableOnInteraction: false, // Don't stop autoplay on interaction
        },
        navigation: true, // Enable navigation arrows
        pagination: {
          clickable: true, // Enable clickable pagination
        },
      },
      bannerImg: [
        {
          url: "/",
          img:
            "https://i.pinimg.com/736x/75/e1/ae/75e1ae2b0b45002dda13f871d752ab5e.jpg",
        },
        {
          url: "/",
          img:
            tlop3,
        },
        {
          url: "/",
          img:
            tlop2,
        },
      ],
    };
  },
   setup() {
      return {
        modules: [EffectFade, Navigation, Pagination, Autoplay,EffectCreative],
      };
    },
};
</script>
