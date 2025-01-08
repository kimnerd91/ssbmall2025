<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="cscMain mx-auto">
      <h1 class="text-center fw-900">마이페이지</h1>
      <div class="d-flex flex-wrap">
        <div class="cscList col-xl-6" v-for="(mp, i) in mpList" :key="i">
          <h3 data-aos="fade-up" data-aos-duration="1000" class="text-left fw-900">
            {{ mp.Ename }}<span class="fw-400">{{ mp.Kname }}</span>
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            class="col-xl-6 col-12 text-left fw-400"
          >
            {{ mp.text }}
          </p>
          <router-link :to="mp.url">
            <button
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="600"
              type="button"
              class="btn-primary fw-900"
            >
              선택
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <SSwiper />
  </main>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable */
AOS.init();
import SSwiper from "@/components/SmallBanner";
export default {
  name: "mypage",
  components: {
    SSwiper,
  },
  data() {
    return {
      mpList: [
        {
          Ename: "PROFILE",
          Kname: "게인정보수정",
          text: "게인정보수정입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/profile",
        },
        {
          Ename: "MYINQUIRY",
          Kname: "문의내역조회",
          text:
            "문의내역조회입니다.자주묻는질문들입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/notice",
        },
        {
          Ename: "ORDER",
          Kname: "주문내역조회",
          text: "주문내역조회입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/inquiry",
        },
        {
          Ename: "MYREVIEW",
          Kname: "작성리뷰조회",
          text: "작성리뷰조회입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/inquiry",
        },
      ],
    };
  },
};
</script>
