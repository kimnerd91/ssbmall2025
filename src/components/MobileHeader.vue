<template>
  <!-- 모바일 헤더 -->
  <div class="mobileHeader">
    <ul class="d-flex align-items-center justify-content-around">
      <li>
        <button
          type="button"
          class="d-flex flex-column gap-1"
          data-bs-toggle="offcanvas"
          href="#offcanvasMobile"
          role="button"
          aria-controls="offcanvasMobileLabel"
        >
          <i class="fa-regular fa-grid-2"></i>
          <p class="fw-700">카테고리</p>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="d-flex flex-column gap-1"
          data-bs-toggle="offcanvas"
          href="#offcanvasSearch"
          role="button"
          aria-controls="offcanvasSearchLabel"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          <p class="fw-700">검색</p>
        </button>
      </li>
      <li>
        <router-link to="/">
          <button type="button" class="d-flex flex-column gap-1">
            <i class="fa-light fa-house-blank"></i>
            <p class="fw-700">상상몰</p>
          </button>
        </router-link>
      </li>
      <li>
        <button
          type="button"
          class="d-flex flex-column gap-1"
          data-bs-toggle="offcanvas"
          href="#offcanvasCart"
          role="button"
          aria-controls="offcanvasCartLabel"
        >
          <i class="fa-sharp fa-regular fa-bag-shopping"></i>
          <p class="fw-700">카트</p>
        </button>
      </li>
      <li>
        <button
          type="button"
          class="d-flex flex-column gap-1"
          data-bs-toggle="offcanvas"
          href="#offcanvasLogin"
          role="button"
          aria-controls="offcanvasLoginLabel"
        >
          <i class="fa-regular fa-user"></i>
          <p class="fw-700">로그인</p>
        </button>
      </li>
    </ul>
  </div>

  <!-- 모바일메뉴 -->
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasMobile"
    aria-labelledby="offcanvasMobileLabel"
  >
    <div
      class="offcanvas-body"
      v-if="!secondMenu && !thirdMenu && !lastMenu"
      data-aos="fade-left"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title fw-500" id="offcanvasMobileLabel">메뉴</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="refresh()"
        ></button>
      </div>
      <div class="fitstMenu">
        <ul>
          <li>
            <button
              type="button"
              class="mobileMenu d-flex justify-content-between align-items-center"
              @click="openSecondMenu()"
            >
              <p class="fw-400">전체 카테고리</p>
              <i class="fa-light fa-chevron-right"></i>
            </button>
          </li>
          <li>
            <router-link to="/event">
              <button
                type="button"
                class="mobileMenu"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <p class="fw-400">이벤트</p>
              </button>
            </router-link>
          </li>
          <li>
            <router-link to="/mypage">
              <button
                type="button"
                class="mobileMenu"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <p class="fw-400">마이페이지</p>
              </button>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <button
                type="button"
                class="mobileMenu"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <p class="fw-400">배송조회</p>
              </button>
            </router-link>
          </li>
          <li>
            <router-link to="/csc">
              <button
                type="button"
                class="mobileMenu"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <p class="fw-400">고객센터</p>
              </button>
            </router-link>
          </li>
          <li>
            <button type="button" class="mobileMenu" @click="logout()">
              <p class="fw-400">로그아웃</p>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- 두번째 메뉴 -->
    <div
      class="offcanvas-body"
      v-if="secondMenu && !thirdMenu && !lastMenu"
      data-aos="fade-left"
    >
      <div class="offcanvas-header">
        <button type="button" class="btn-back" @click="openSecondMenu()">
          <i class="fa-light fa-chevron-left"></i>
        </button>
        <h5 class="offcanvas-title fw-500" id="offcanvasMobileLabel">전체 카테고리</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="refresh()"
        ></button>
      </div>
      <div class="secondMenu">
        <ul>
          <li
            v-for="(aaa, i) in category.cateOne"
            :key="i"
            @click="activeCategoryIndex = i"
            :class="{ active: i === activeCategoryIndex }"
          >
            <button
              type="button"
              class="mobileMenu d-flex justify-content-between align-items-center" data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="refresh()"
            >
              <router-link to="/productList">
                <p class="fw-400">{{ aaa.name }}</p>
              </router-link>
              <!-- <button type="button">
                <i class="fa-light fa-chevron-right" @click="openThirdMenu(aaa.name)"></i>
              </button> -->
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 3번째 메뉴 -->
    <!-- <div class="offcanvas-body" v-if="thirdMenu && !lastMenu" data-aos="fade-left">
      <div class="offcanvas-header">
        <button type="button" class="btn-back" @click="openThirdMenu()">
          <i class="fa-light fa-chevron-left"></i>
        </button>
        <h5 class="offcanvas-title fw-500" id="offcanvasMobileLabel">
          {{ activeCategoryName }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="refresh()"
        ></button>
      </div>
      <div class="thirdMenu">
        <ul>
          <li v-for="(bbb, j) in category.cateOne[activeCategoryIndex].cateTwo" :key="j">
            <button
              type="button"
              class="mobileMenu d-flex justify-content-between align-items-center"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <router-link to="/">
                <p class="fw-400">{{ bbb.name }}</p>
              </router-link>
              <button type="button" @click="openlastMenu(bbb.name)">
                <i class="fa-light fa-chevron-right"></i>
              </button>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- 마지막 메뉴 -->
    <!-- <div class="offcanvas-body" v-if="lastMenu" data-aos="fade-left">
      <div class="offcanvas-header">
        <button type="button" class="btn-back" @click="openlastMenu()">
          <i class="fa-light fa-chevron-left"></i>
        </button>
        <h5 class="offcanvas-title fw-500" id="offcanvasMobileLabel">
          {{ activeSubCategoryName }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          @click="refresh()"
        ></button>
      </div>
      <div class="lastMenu">
        <ul>
          <li v-for="(ddd, j) in selectedCateThree" :key="j">
            <router-link to="/">
              <button
                type="button"
                class="mobileMenu d-flex justify-content-between align-items-center"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <p class="fw-400">{{ ddd }}</p>
              </button>
            </router-link>
          </li>
        </ul>
      </div>
    </div> --> 
  </div>

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
              <label class="fw-300"> 이메일 </label>
              <input
                type="email"
                name="email"
                v-model="login.email"
                placeholder="이메일을 입력해주세요."
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
                  <router-link to="/" class="fw-900">이메일찾기</router-link>
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
  <!-- 오프캔버스 검색 -->
  <div
    class="offcanvas offcanvas-start offSearch"
    tabindex="-1"
    id="offcanvasSearch"
    aria-labelledby="offcanvasSearchLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasSearchLabel"></h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <input
          type="text"
          name="search"
          v-model="searchQuery"
          @keydown="search"
          placeholder="검색"
        />
        <button type="button" @click="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div class="searchedText">
        <h6 class="fw-900">최근 검색어</h6>
        <ul>
          <li v-for="(qqq, p) in searched5" :key="p">
            <router-link to="/" class="fw-400"> {{ term }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable */
AOS.init();
export default {
  name: "mobileHeader",
  components: {},
  data() {
    return {
      searchQuery: "",
      searchHistory: {}, // This will hold search term frequencies
      searched5: [],
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
      secondMenu: false,
      thirdMenu: false,
      lastMenu: false,
      activeCategoryIndex: 0,
      activeCategoryName: "",
      activeSubCategoryName: "",
      category: {
        cateOne: [
          {
            name: "SEASON01",
            cateTwo: [
              {
                name: "카테고리A1",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리A2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리A3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리A4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리A5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
          {
            name: "SEASON02",
            cateTwo: [
              {
                name: "카테고리B1",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리B2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리B3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리B4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리B5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
          {
            name: "SEASON03",
            cateTwo: [
              {
                name: "카테고리C1",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리C2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리C3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리C4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리C5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
          {
            name: "SEASON04",
            cateTwo: [
              {
                name: "카테고리DA",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리D2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리D3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리D4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리D5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
          {
            name: "SEASON05",
            cateTwo: [
              {
                name: "카테고리E1",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리E2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리E3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리E4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리E5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
          {
            name: "SEASON06",
            cateTwo: [
              {
                name: "카테고리F1",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리F2",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리F3",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리F4",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
              {
                name: "카테고리F5",
                cateThree: [
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                  "cateOneB1",
                  "cateOneB2",
                  "cateOneB3",
                ],
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    logout() {
      const confirmation = window.confirm("정말로 로그아웃 하시겠습니까?");
      if (confirmation) {
        alert("로그아웃 되었습니다.");
        sessionStorage.clear();
        this.$router.push("/"); // Redirect to the login page
      } else {
        console.log("User canceled logout");
      }
    },

    refresh() {
      this.activeCategoryIndex = 0;
      this.activeCategoryName = "";
      this.secondMenu = false;
      this.thirdMenu = false;
      this.lastMenu = false;
      this.activeSubCategoryName = "";
    },
    openSecondMenu() {
      this.secondMenu = !this.secondMenu;
      this.thirdMenu = false; // 뒤로가기 시 thirdMenu 닫기
      this.lastMenu = false;
    },
    openThirdMenu(categoryName) {
      this.thirdMenu = !this.thirdMenu;
      this.secondMenu = !this.secondMenu;
      this.lastMenu = false;
      this.activeCategoryName = categoryName; // 클릭한 카테고리 이름 저장
    },
    openlastMenu(subCategoryName) {
      this.lastMenu = !this.lastMenu;
      this.secondMenu = !this.secondMenu;
      this.thirdMenu = !this.thirdMenu;
      this.activeSubCategoryName = subCategoryName;
    },

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
    // 검색어 관련기능
    search(event) {
      // Check if the Enter key (keyCode 13) was pressed
      if (event.key === "Enter" && this.searchQuery.trim() !== "") {
        // Update the frequency of the search term
        if (this.searchHistory[this.searchQuery]) {
          this.searchHistory[this.searchQuery] += 1;
        } else {
          this.searchHistory[this.searchQuery] = 1;
        }

        // Save the updated search history to localStorage
        this.updateSearched5();
        this.saveSearchHistoryToLocalStorage();
      }
    },

    updateSearched5() {
      // Sort by frequency and get the top 5 most frequent search terms
      const sorted = Object.entries(this.searchHistory)
        .sort((a, b) => b[1] - a[1]) // Sort by frequency (descending)
        .slice(0, 5); // Limit to top 5

      // Update searched5 with the top 5 search terms
      this.searched5 = sorted.map((item) => item[0]);
    },

    saveSearchHistoryToLocalStorage() {
      // Save the search history to localStorage
      localStorage.setItem("searchHistory", JSON.stringify(this.searchHistory));
    },

    loadSearchHistoryFromLocalStorage() {
      // Load the search history from localStorage when the component is created
      const savedHistory = localStorage.getItem("searchHistory");
      if (savedHistory) {
        this.searchHistory = JSON.parse(savedHistory);
        this.updateSearched5(); // Update searched5 based on the loaded history
      }
    },
  },
  created() {
    // Load the search history when the component is created
    this.loadSearchHistoryFromLocalStorage();
  },
  computed: {
    selectedCateThree() {
      // Find the active cateOne by name
      const activeCateOne = this.category.cateOne.find(
        (item) => item.name === this.activeCategoryName
      );
      if (!activeCateOne) return [];

      // Find the active cateTwo by name
      const activeCateTwo = activeCateOne.cateTwo.find(
        (item) => item.name === this.activeSubCategoryName
      );
      return activeCateTwo ? activeCateTwo.cateThree : [];
    },
  },
};
</script>
