<template>
  <div class="joinWrap col-xl-3 com-xs-10 m-auto pt-4 pb-4">
    <h1 class="fw-900">회원가입</h1>
    <div class="inputBox">
      <label class="fw-500">회원가입</label>
      <input type="text" name="id" v-model="joinNeeds.id" placeholder="아이디" />
      <input
        type="password"
        name="password"
        v-model="joinNeeds.password"
        placeholder="비밀번호"
      />
      <input
        type="password"
        name="passwordConfirm"
        v-model="joinNeeds.passwordConfirm"
        placeholder="비밀번호확인"
      />
    </div>
    <div class="inputBox">
      <input
        type="text"
        name="phone"
        v-model="joinNeeds.phone"
        placeholder="휴대폰 번호 ex) 01011112222"
      />
      <input type="text" name="name" v-model="joinNeeds.name" placeholder="이름" />
      <input type="email" name="email" v-model="joinNeeds.email" placeholder="이메일" />
    </div>
    <div class="inputBox">
      <div class="address d-flex justify-content-between align-items-start">
        <input type="text" name="address" v-model="joinNeeds.address" />
        <button type="button" class="fw-700" @click="openPostcode()">주소검색</button>
      </div>
      <input type="text" name="addaddress" v-model="joinNeeds.addaddress" />
    </div>
    <div class="text-left">
      <label class="fw-500">이용약관</label>
      <div class="d-flex align-items-center">
        <input type="checkbox" name="apply1" v-model="joinNeeds.apply1" />
        <label for="apply11"  class="fw-300"><button type="button" data-bs-toggle="modal" data-bs-target="#apply1" class="fw-300">무언가 약관에</button>관련된 것에 동의합니다.</label>
      </div>
      <div class="d-flex align-items-center">
        <input type="checkbox" name="apply2" v-model="joinNeeds.apply2" />
        <label for="apply12" class="fw-300"><button type="button" data-bs-toggle="modal" data-bs-target="#apply2" class="fw-300">무언가 약관에</button>관련된 것에 동의합니다.</label>
      </div>
      <div class="d-flex align-items-center">
        <input type="checkbox" name="applyall" v-model="selectAll" />
        <label for="applyall" class="ml-2 fw-300">전체동의</label>
      </div>
    </div>
    <button type="button" class="btn-primary w-100">회원가입</button>
  </div>

  <!-- Modal -->
<div class="modal fade" id="apply1" tabindex="-1" aria-labelledby="apply1Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <img :src="logoImg" alt="">
      </div>
      <div class="modal-body">
      <label for=""  class="fw-900">이용약관</label>
        <textarea rows="" cols="" readonly></textarea>
      </div>
      <div class="modal-footer single">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">약관을 확인했습니다.</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="apply2 " tabindex="-1" aria-labelledby="apply2Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <img :src="logoImg" alt="">
      </div>
      <div class="modal-body">
      <label for="" class="fw-900">이용약관</label>
        <textarea rows="" cols="" readonly></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">약관을 확인했습니다.</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/* eslint-disable vue/multi-word-component-names */
export default {
  name: "JoinPage",
  data() {
    return {
        logoImg:
        "https://www.balenciaga.com/on/demandware.static/-/Sites/default/dw983514c8/images/logo/BAL/logo.svg",
      joinNeeds: {
        id: "",
        password: "",
        passwordConfirm: "",
        phone: "",
        name: "",
        email: "",
        address: "",
        addaddress: "",
        postNumber: "",
        apply1: false,
        apply2: false,
      },
    };
  },
  methods: {
    openPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          this.joinNeeds.address = `(${data.zonecode}) ${data.roadAddress}`;
        },
      }).open();
    },
  },
  computed: {
    // `전체동의` 상태를 모든 약관 체크박스와 동기화
    selectAll: {
      get() {
        return this.joinNeeds.apply1 && this.joinNeeds.apply2;
      },
      set(value) {
        this.joinNeeds.apply1 = value;
        this.joinNeeds.apply2 = value;
      },
    },
  },
};
</script>
