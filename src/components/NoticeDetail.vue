<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="mx-auto col-xl-10 notice">
      <h1 class="text-center fw-900">공지사항</h1>
      <div >
        <div class="noticeHead d-flex justify-content-between align-items-center">
          <h4 class="fw-400">[공지] 공지사항들이 들어갈 자리입니다.</h4>
          <span class="fw-400">2022.12.22</span>
        </div>
        <div  data-aos="flip-left" data-aos-duration="1500" class="noticeBody text-left">
          <img
            src="https://balenciaga.dam.kering.com/asset/df4d90e5-e47d-4d52-a960-227de6886a74/Large/HP_DK_SP25_NBC_W1_01_2600x1300px_2x1.jpg"
            alt=""
          />
          공지사항 내용
        </div>
      </div>
      <button type="button"  data-aos="fade-up" data-aos-duration="1000" class="btn-primary col-xl-4">
      <router-link to="/notice">
      목록</router-link></button>
    </div>
  </main>
</template>
<script>
export default {
  name: "noticeDetail",
  components: {},
  data() {
    return {};
  },
};
</script>
