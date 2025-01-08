<template>
<footer class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="text-left">
         <img :src="logoImg" alt="" />
         <ul class="d-flex align-items-center">
            <li><router-link to="/" class="fw-900">회사소개</router-link></li>
            <li><router-link to="/" class="fw-900">개인정보처리방침</router-link></li>
            <li><router-link to="/" class="fw-900">이용약관</router-link></li>
            <li><router-link to="/csc" class="fw-900">고객센터</router-link></li>
         </ul>
         <div class="col-xl-5 col-sm-12">
            <p class="companyInfo fw-400">계좌번호 : 신한은행 140-013-349110
            상호명 : 주식회사 하이라이트브랜즈
            호스팅 제공자 : (주)위사 말본골프 | malbon golf
            대표이사 : Jun Kwon Lee
            주소 : 경기 성남시 분당구 판교로 242 PDC빌딩 A동 8F
            통신판매업신고 : 2019-성남분당B-0523
            사업자등록번호 : 788-81-01239
            개인정보취급관리자 : 하이라이트브랜즈
            이메일 : support@hibs.co.kr
            고객센터 : 031-8060-0290
            대리점 입점 문의 : inbae.ji@hibs.co.kr
            마케팅 제휴 : marketing@hibs.co.kr</p>
         </div>
    </div>
    <h6 class="text-left fw-500">®Copyright by SangSangBreakers</h6>
</footer>
</template>
<script>
/* eslint-disable */
import logoimg from "@/assets/THELIFEOfPABLO.png"
export default {
    name: "footer",
    components: {},
    data() {
        return {
            logoImg:
       logoimg,
        }
    },
}
</script>