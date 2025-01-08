<template>
  <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto" data-aos="fade-up"
      data-aos-duration="1000">
    <div class="eventWrap"  >
      <div class="eventHeader col-xl-6">
        <label class="fw-900 text-left d-block">EVENT</label>
        <h1 class="col-xl-5 fw-900 text-left">이벤트 이름이 들어갈 자리입니다.</h1>
        <p class="text-left fw-300">
          이벤트 설명, 설명, 설명이 들어갈, 들어갈 자리리리리 입니다아아아아.
        </p>
        <span class="d-block text-left fw-300">2024-11-26 ~ 2024-12-31</span>
      </div>
      <div class="eventBody text-left">
        <img
          src="https://i.pinimg.com/736x/78/c3/fd/78c3fdbcf04378181b6edbfd673a5125.jpg"
          alt=""
        />
        <p>이벤트 내용입니다.</p>
      </div>
          <button
      type="button"

      class="btn-primary col-xl-4"
    >
      <router-link to="/event"> 목록</router-link>
    </button>
    </div>

  </div>
</template>
