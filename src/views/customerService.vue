<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="cscMain mx-auto">
      <h1 class="text-center fw-900">고객센터</h1>
      <div class="d-flex flex-wrap">
        <div  class="cscList col-xl-6" v-for="(csc, i) in cscList" :key="i">
          <h3 data-aos="fade-up" data-aos-duration="1000"  class="text-left fw-900">
            {{ csc.Ename }}<span class="fw-400">{{ csc.Kname }}</span>
          </h3>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" class="col-xl-6 col-12 text-left fw-400">{{ csc.text }}</p>
          <router-link :to="csc.url">
            <button data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600" type="button" class="btn-primary fw-900">선택</button>
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
  name: "cscMain",
  components: {
    SSwiper,
  },
  data() {
    return {
      cscList: [
        {
          Ename: "FAQ",
          Kname: "자주묻는질문",
          text: "자주묻는질문들입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/Faq",
        },
        {
          Ename: "NOTICE",
          Kname: "공지사항",
          text:
            "자주묻는질문들입니다.자주묻는질문들입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/notice",
        },
        {
          Ename: "INQUIRY",
          Kname: "1:1 문의하기",
          text: "자주묻는질문들입니다. 궁금한 거 여기서 확인하시면 됨. 배송같은거",
          url: "/inquiry",
        },
      ],
    };
  },
};
</script>
