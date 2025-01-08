<template>
  <header class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
    <!-- 로고와 사이드메뉴 -->
    <div class="headerTop">
      <!-- 최상단 우측  사이드 메뉴 -->
      <div class="sideMenu d-flex justify-content-end">
        <ul class="d-flex align-items-center justify-content-end col-3 col-lg-4 col-md-5 ">
          <li>
            <button
              type="button"
              class="loginBtn fw-300"
              data-bs-toggle="offcanvas"
              href="#offcanvasLogin"
              role="button"
              aria-controls="offcanvasLoginLabel"
            >
              로그인
            </button>
          </li>
          <li>
            <router-link to="/orderHistory" class="fw-300">주문조회</router-link>
          </li>
          <li>
            <button
              type="button"
              class="cartBtn fw-300"
              data-bs-toggle="offcanvas"
              href="#offcanvasCart"
              role="button"
              aria-controls="offcanvasCartLabel"
            >
              카트
            </button>
          </li>
          <li>
            <button
              type="button"
              class="wishBtn fw-300"
              data-bs-toggle="offcanvas"
              href="#offcanvasWish"
              role="button"
              aria-controls="offcanvasWishLabel"
            >
              위시리스트
            </button>
          </li>
          <li>
            <router-link to="/csc" class="fw-300">고객센터</router-link>
          </li>
        </ul>
      </div>
      <!-- 최상단 우측  사이드 메뉴 종료-->
      <div class="headerLogo">
      <router-link to="/">
        <img :src="logoImg" alt="" />
        </router-link>
      </div>
    </div>
    <!-- 로고와 사이드메뉴 종료 -->
    <!-- 기본 메뉴 + 전체메뉴 -->
  </header>

  <!-- 오프캔버스 카트 -->

  <div
    class="offcanvas offcanvas-start offCart"
    tabindex="-1"
    id="offcanvasCart"
    aria-labelledby="offcanvasCartLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-300" id="offcanvasCartLabel">카트</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <ul v-if="cart.length > 0">
          <li v-for="(ooo, m) in cart" :key="m">
            <div class="d-flex itemWrap align-items-center justify-content-between">
              <div class="col-3 itemImg">
                <img :src="ooo.img" alt="" />
              </div>
              <div class="col-9 itemText">
                <h5 class="fw-500">
                  {{ ooo.name }}
                </h5>
                <p class="fw-400">{{ ooo.option }}</p>
                <span class="fw-400">x {{ ooo.many }}</span>
                <h6 class="fw-500">￦ {{ formatPrice(ooo.price) }}</h6>
              </div>
              <button
                type="button"
                class="fw-300 position-absolute"
                @click="removeItem(m)"
              >
                삭제
              </button>
            </div>
          </li>
          <div class="cleanBtn" v-if="cart.length > 0">
            <button type="button" class="btn-primary fw-900" @click="removeItem()">
              카트 비우기
            </button>
          </div>
        </ul>
        <div data-aos="fade-up" data-aos-duration="2000" class="emptyCart" v-else>
          <p class="fw-300">장바구니에 담긴 물건이 없습니다</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 오프캔버스 로그인 -->

  <div
    class="offcanvas offcanvas-start offLogin"
    tabindex="-1"
    id="offcanvasLogin"
    aria-labelledby="offcanvasLoginLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-300" id="offcanvasLoginLabel">로그인</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <!-- 상단 네비 버튼 -->
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item col-6">
            <a
              class="nav-link fw-300"
              aria-current="page"
              href="#"
              :class="{ active: activeTab === 'login' }"
              @click="activeTab = 'login'"
              >로그인</a
            >
          </li>
          <li class="nav-item col-6">
            <a
              class="nav-link fw-300"
              href="#"
              :class="{ active: activeTab === 'guest' }"
              @click="activeTab = 'guest'"
              >비회원 배송조회</a
            >
          </li>
        </ul>
        <!-- 로그인 화면 -->
        <div class="loginWrap" v-if="activeTab == 'login'" data-aos="flip-left">
          <!-- 로그인 인풋 -->
          <div class="loginInput">
            <div class="loginEmail d-flex flex-column text-left">
              <label class="fw-300"> 아이디 </label>
              <input
                type="text"
                name="id"
                v-model="login.email"
                placeholder="아이디를 입력해주세요."
              />
            </div>
            <div class="loginPassword d-flex flex-column text-left">
              <label class="fw-300"> 비밀번호 </label>
              <input
                type="password"
                name="email"
                v-model="login.password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
            <div class="d-flex align-items-center justify-content-between loginAuto">
              <div>
                <label for="autoLogin" class="d-flex align-items-center gap-1">
                  <input type="checkbox" name="autoLogin" v-model="autoLogin" />
                  <span>자동로그인</span>
                </label>
              </div>
            </div>
          </div>
          <!-- 로그인 등 버튼 -->
          <div class="loginButtonWrap">
            <button type="button" class="btn-primary fw-900">로그인</button>
            <div class="buttonWrap">
              <ul class="d-flex justify-content-center">
                <li>
                  <router-link to="/join" class="fw-900">회원가입</router-link>
                </li>
                <span>|</span>
                <li>
                  <button
                    type="button"
                    class="fw-900"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasFI"
                    role="button"
                    aria-controls="offcanvasFILabel"
                  >
                    아이디찾기
                  </button>
                </li>
                <span>|</span>
                <li>
                  <button
                    type="button"
                    class="fw-900"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasFP"
                    role="button"
                    aria-controls="offcanvasFPLabel"
                  >
                    비밀번호찾기
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <!-- 소셜 로그인 화면 -->
          <div class="socialLogin d-flex align-items-center">
            <div class="col-4 naver">
              <router-link
                to="/"
                class="d-flex align-items-center justify-content-around gap-1"
              >
                <img
                  class="col-3"
                  src="https://littledeep.com/wp-content/uploads/2020/09/naver-icon-style.png"
                  alt=""
                />
                <p class="fw-900">네이버 로그인</p>
              </router-link>
            </div>
            <div class="col-4 google">
              <router-link
                to="/"
                class="d-flex align-items-center justify-content-around gap-1"
              >
                <img
                  class="col-3"
                  src="https://img.icons8.com/?size=512&id=17949&format=png"
                  alt=""
                />
                <p class="fw-900">구글 로그인</p>
              </router-link>
            </div>
            <div class="col-4 kakao">
              <router-link
                to="/"
                class="d-flex align-items-center justify-content-around gap-1"
              >
                <img
                  class="col-3"
                  src="https://w7.pngwing.com/pngs/722/163/png-transparent-kakaotalk-macos-bigsur-icon-thumbnail.png"
                  alt=""
                />
                <p class="fw-900">카카오 로그인</p>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 게스트 화면 -->
        <div class="guestWrap" v-if="activeTab == 'guest'" data-aos="flip-left">
          <div>
            <label class="fw-300">주문번호</label>
            <input
              type="text"
              name=""
              v-model="guest.gOrderNo"
              placeholder="주문번호를 입력해주세요."
            />
          </div>
          <div>
            <label class="fw-300">이메일</label>
            <input
              type="email"
              name=""
              v-model="guest.gEmail"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div>
            <label class="fw-300">이름</label>
            <input
              type="text"
              name=""
              v-model="guest.gName"
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div class="loginButtonWrap">
            <button type="button" class="btn-primary fw-900">조회</button>
          </div>
        </div>
      </div>
      <!-- 로그인 화면 시 하단 텍스트 -->
      <div class="loginAddText text-left" v-if="activeTab == 'login'">
        <h6 class="fw-900">회원가입 시, 더 편리하게 이용할 수 있습니다.</h6>
        <ul>
          <li class="fw-400">ㆍ 위시리스트 생성 및 저장</li>
          <li class="fw-400">ㆍ 간결하고 빠른 주문 및 배송조회</li>
          <li class="fw-400">ㆍ 구독을 통한 이벤트와 프로모션에 대한 접근성</li>
        </ul>
      </div>
      <!-- 비회원시 하단 텍스트 -->
      <div class="loginAddText text-left" v-if="activeTab == 'guest'">
        <h6 class="fw-900">주문일자로부터 3개월 간 조회가 가능합니다.</h6>
        <ul>
          <li class="fw-400">
            ㆍ 기타문의 사항은 아래 번호 혹은 고객센터를 이용해 주세요.
          </li>
          <li class="fw-400">ㆍ 000-000-0000</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 오프캔버스 비밀번호 찾기 -->
  <div
    class="offcanvas offcanvas-start offFP"
    tabindex="-1"
    id="offcanvasFP"
    aria-labelledby="offcanvasFPLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-300" id="offcanvasFPLabel">비밀번호 찾기</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <h2 class="col-xl-9 fw-400">
          회원가입 시 입력한, 이메일 주소를 입력 후, 확인 버튼을 클릭해 주세요.
        </h2>
        <div>
          <label class="fw-300">이메일</label>
          <input
            type="email"
            name=""
            v-model="findPassword.fpEmail"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div class="findPasswordBtn">
          <button type="button" class="btn-primary fw-900" @click="sendEmail">
            조회
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 오프캔버스 아이디 찾기 -->
  <div
    class="offcanvas offcanvas-start offFP"
    tabindex="-1"
    id="offcanvasFI"
    aria-labelledby="offcanvasFILabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-300" id="offcanvasFILabel">아이디 찾기</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <h2 class="col-xl-9 fw-400">
          회원가입 시 입력한, 이메일 주소를 입력 후, 확인 버튼을 클릭해 주세요.
        </h2>
        <div>
          <label class="fw-300">이메일</label>
          <input
            type="email"
            name=""
            v-model="findPassword.fpEmail"
            placeholder="이메일을 입력해주세요."
          />
        </div>
        <div class="findPasswordBtn">
          <button type="button" class="btn-primary fw-900" @click="sendEmail">
            조회
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 오프캔버스 위시리스트 -->

  <div
    class="offcanvas offcanvas-start offWish"
    tabindex="-1"
    id="offcanvasWish"
    aria-labelledby="offcanvasWishLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title fw-300" id="offcanvasWishLabel">위시리스트</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <ul v-if="cart.length > 0">
          <li v-for="(ooo, m) in wishlist" :key="m">
            <div class="d-flex itemWrap align-items-center justify-content-between">
              <div class="col-3 itemImg">
                <img :src="ooo.img" alt="" />
              </div>
              <div class="col-9 itemText">
                <h5 class="fw-500">
                  {{ ooo.name }}
                </h5>
                <p class="fw-400">{{ ooo.option }}</p>
                <span class="fw-400">x {{ ooo.many }}</span>
                <h6 class="fw-500">￦ {{ formatPrice(ooo.price) }}</h6>
              </div>
              <button
                type="button"
                class="fw-300 position-absolute"
                @click="removeItem(m)"
              >
                삭제
              </button>
            </div>
          </li>
          <div class="cleanBtn" v-if="cart.length > 0">
            <button type="button" class="btn-primary fw-900" @click="removeItem()">
              위시리스트 비우기
            </button>
          </div>
        </ul>
        <div data-aos="fade-up" data-aos-duration="2000" class="emptyCart" v-else>
          <p class="fw-300">위시리스트에 담긴 물건이 없습니다</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
import logoImg from "@/assets/THELIFEOfPABLO.png"

/* eslint-disable */
AOS.init();
export default {
  name: "Header",
  data() {
    return {
      logoImg: logoImg,
      cart: [
        {
          img:
            "https://balenciaga.dam.kering.com/m/7ac88a759f20594b/Small-685613W2RA61000_X.jpg?v=3",
          name: "제품명이 들어갑니다.",
          option: "옵션명이 들어갑니다",
          many: 1,
          price: 10000,
        },
      ],
      wishlist: [
        {
          img:
            "https://balenciaga.dam.kering.com/m/8d9b17e3ddace31/Small-809489TNO121000_Y.jpg?v=1",
          name: "제품명이 들어갑니다.",
          option: "옵션명이 들어갑니다",
          many: 1,
          price: 2000000,
        },
      ],
      activeTab: "login",
      login: {
        email: "",
        password: "",
      },
      guest: {
        gOrderNo: "",
        gEmail: "",
        gName: "",
      },
      findPassword: {
        fpEmail: "",
      },
      autoLogin: false,
    };
  },
  methods: {
    // 장바구니 삭제기능
    removeItem(index) {
      // Remove the item at the given index
      this.cart.splice(index, 1);
    },
    // 비밀번호 찾기 이메일 전송기능
    async sendEmail() {
      if (!this.findPassword.fpEmail) {
        alert("이메일을 입력해주세요.");
        return;
      }

      try {
        const response = await axios.post("/api/send-email", {
          email: this.findPassword.fpEmail,
        });
        if (response.data.success) {
          alert("이메일이 성공적으로 전송되었습니다.");
        } else {
          alert("이메일 전송에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("에러 발생:", error);
        alert("서버에 문제가 발생했습니다. 나중에 다시 시도해주세요.");
      }
    },
    formatPrice(price) {
      return price.toLocaleString();
    },
  },
};
</script>
