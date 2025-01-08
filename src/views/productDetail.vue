<template>
  <main class="product col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="d-flex productHeader">
      <div
        class="col-sm-12 col-xl-6 productImg"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="100"
      >
        <swiper
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          :loop="true"
          :navigation="true"
          :pagination="true"
          class="mySwiper"
        >
          <swiper-slide v-for="(aaa, g) in product.img" :key="g">
            <img :src="aaa" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="text-left w-100"
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
      >
        <h2 class="fw-700">{{ product.name }}</h2>
        <p class="productText fw-400">{{ product.text }}</p>
        <div class="productPrice fw-300 d-flex align-items-center">
          ￦
          <h3 class="fw-500">{{ formatPrice(product.price) }}</h3>
          <span class="fw-300">{{ formatPrice(product.OGprice) }}</span>
        </div>
        <div class="d-flex flex-column">
          <div class="inputBox">
            <label>옵션</label>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                :style="{ color: selectedOption ? 'black' : 'gray !important' }"
              >
                {{ selectedOption || "문의 유형을 선택해 주세요." }}
              </button>
              <ul class="dropdown-menu">
                <li v-for="item in options" :key="item.id">
                  <a class="dropdown-item" href="#" @click.prevent="selectOption(item)">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <label>구매개수</label>
          <div class="d-flex countDiv">
            <button type="button" @click="decreaseCount()">
              <i class="fa-solid fa-minus"></i>
            </button>
            <p>{{ product.count }}</p>
            <button type="button" @click="increaseCount()">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center delivaryDiv">
          <div>
            <span>배송비</span>
            <p><span>￦</span> {{ formatPrice(product.delivary) }}</p>
          </div>
          <p>ㆍ도서 산간지방 등은 추가 배송료가 적용될 수 있습니다</p>
        </div>
        <div class="text-right d-flex flex-end totalPrice">
          <p class="fw-400">총 상품금액</p>
          <h6 class="fw-900">{{ formatPrice(totalPrice) }} 원</h6>
        </div>
        <div class="btnWrap d-flex align-items-center">
          <div class="col-8">
            
            <router-link to="/order">
              <button type="button" class="btn-primary w-100 buy" >바로구매</button>
            </router-link>
            
          </div>
          <div class="col-4 d-flex align-items-center">
            <button type="button" class="btn-secondary">
              <i class="fa-sharp fa-light fa-bag-shopping"></i>
            </button>
            <button
              type="button"
              class="btn-secondary detailWish"
              data-bs-toggle="modal"
              data-bs-target="#wishalert"
              @click="toggleHeart(i)"
              :class="{ active: wishList[i] }"
            >
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="productBody">
      <div class="tabButton" id="detail">
        <ul>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#detail">상세정보</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#review">리뷰</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#inquiry">문의</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#delivary">배송/교환/반품사항</a>
            </button>
          </li>
        </ul>
      </div>
      <div class="detailPage" :style="{ maxHeight: isExpanded ? '100%' : '70vh' }">
        <img v-for="(bbb, i) in product.detailImg" :key="i" :src="bbb" alt="" />
        <div class="moreView">
          <button type="button" class="btn-primary" @click="toggleView">
            {{ isExpanded ? "접기" : "더보기" }}
          </button>
        </div>
      </div>
      <div class="tabButton" id="review">
        <ul>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#detail">상세정보</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#review">리뷰</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#inquiry">문의</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#delivary">배송/교환/반품사항</a>
            </button>
          </li>
        </ul>
      </div>
      <div class="reviewPage">
        <div class="reviewImg">
          <ul class="reviewUL">
            <li v-for="(img, i) in product.reviewImg" :key="i">
              <button
                type="button"
                class="imgButton"
                data-bs-toggle="modal"
                data-bs-target="#reviewViewModal"
                @click="openReviewModal(product.reviewList[i])"
              >
                <img :src="img" alt="" />
              </button>
            </li>
            <li>
              <button type="button" class="more">더보기</button>
            </li>
          </ul>
          <div class="dropdownBox">
            <div class="inputBox">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  :style="{ color: selectedOption ? 'black' : 'gray !important' }"
                >
                  {{ selectedOption || "문의 유형을 선택해 주세요." }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="item in options2" :key="item.id">
                    <a class="dropdown-item" href="#" @click.prevent="selectOption(item)">
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex reviewBox" v-for="(ddd, i) in product.reviewList" :key="i">
            <div
              class="reviewName d-flex justify-content-between align-items-center fw-400"
            >
              <p>{{ ddd.reviewName }}</p>
              <span>{{ ddd.date }}</span>
            </div>
            <div class="reviewText">
              <i
                class="fa-solid fa-star"
                v-for="(star, j) in ddd.reviewStar"
                :key="j"
              ></i>
              <div class="mt-2 mb-4" v-if="ddd.reviewImg.length > 0">
                <img
                  v-if="ddd.reviewImg.length > 0"
                  v-for="(img, k) in ddd.reviewImg"
                  :key="k"
                  :src="img"
                  alt=""
                />
              </div>

              <p class="fw-400">{{ ddd.reviewText }}</p>
            </div>
          </div>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" v-if="this.totalPages > 1">
                <a class="page-link prevprev" href="#" @click.prevent="setActivePage(1)">
                  <i class="fa-light fa-chevrons-left"></i>
                </a>
              </li>
              <li class="page-item" v-if="this.totalPages > 1">
                <a
                  class="page-link prev"
                  href="#"
                  @click.prevent="setActivePage(Math.max(currentPage - 1, 1))"
                >
                  <i class="fa-light fa-chevron-left"></i>
                </a>
              </li>
              <li
                class="page-item"
                v-for="page in pages"
                :key="page"
                :class="{ active: currentPage === page }"
              >
                <a class="page-link" href="#" @click.prevent="setActivePage(page)">
                  {{ page }}
                </a>
              </li>
              <li class="page-item" v-if="this.totalPages > 1">
                <a
                  class="page-link next"
                  href="#"
                  @click.prevent="setActivePage(Math.min(currentPage + 1, totalPages))"
                >
                  <i class="fa-light fa-chevron-right"></i>
                </a>
              </li>
              <li class="page-item" v-if="this.totalPages > 1">
                <a
                  class="page-link nextnext"
                  href="#"
                  @click.prevent="setActivePage(totalPages)"
                >
                  <i class="fa-light fa-chevrons-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="tabButton" id="inquiry">
        <ul>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#detail">상세정보</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#review">리뷰</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#inquiry">문의</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#delivary">배송/교환/반품사항</a>
            </button>
          </li>
        </ul>
      </div>
      <div class="inquiryPage">
        <div>
          <ul class="inquiryUL">
            <li
              class="d-flex justify-content-between align-items-center"
              v-for="(qqq, i) in product.inquiryList"
              :key="i"
              @click="openInquiryModal(qqq)"
              data-bs-toggle="modal"
              data-bs-target="#inquiryModal"
            >
              <div class="inquiryCategory text-center">{{ qqq.category }}</div>
              <div class="inquiryTitle d-flex align-items-center text-left">
                <p class="fw-400">
                  {{ qqq.title }}
                  <span v-if="qqq.lock"><i class="fa-regular fa-lock"></i> 비밀글</span>
                </p>
                <span v-if="qqq.reply" class="reply">답변완료</span>
                <span v-else class="noreply">답변대기</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="writeDown">
          <button
            type="button"
            class="btn-primary inquiryWrite"
            data-bs-toggle="modal"
            data-bs-target="#inquiryWriteModal"
          >
            문의작성
          </button>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item" v-if="this.totalPages > 1">
              <a class="page-link prevprev" href="#" @click.prevent="setActivePage(1)">
                <i class="fa-light fa-chevrons-left"></i>
              </a>
            </li>
            <li class="page-item" v-if="this.totalPages > 1">
              <a
                class="page-link prev"
                href="#"
                @click.prevent="setActivePage(Math.max(currentPage - 1, 1))"
              >
                <i class="fa-light fa-chevron-left"></i>
              </a>
            </li>
            <li
              class="page-item"
              v-for="page in pages"
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="setActivePage(page)">
                {{ page }}
              </a>
            </li>
            <li class="page-item" v-if="this.totalPages > 1">
              <a
                class="page-link next"
                href="#"
                @click.prevent="setActivePage(Math.min(currentPage + 1, totalPages))"
              >
                <i class="fa-light fa-chevron-right"></i>
              </a>
            </li>
            <li class="page-item" v-if="this.totalPages > 1">
              <a
                class="page-link nextnext"
                href="#"
                @click.prevent="setActivePage(totalPages)"
              >
                <i class="fa-light fa-chevrons-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="tabButton" id="delivary">
        <ul>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#detail">상세정보</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#review">리뷰</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#inquiry">문의</a>
            </button>
          </li>
          <li>
            <button class="btn-secondary" type="button">
              <a href="#delivary">배송/교환/반품사항</a>
            </button>
          </li>
        </ul>
      </div>
      <div class="delivary">
        <img
          src="https://image.uniqlo.com/UQ/ST3/kr/imagesother/cs/iq/shipping/shippingprocess.jpg"
          alt=""
        />
      </div>
      <div class="productFooter">
        <ul
          class="col-xl-7 col-12 mx-auto d-flex align-items-center justify-content-around"
        >
          <li>
            <button
              class="btn-secondary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#wishalert"
            >
              WISHILIST
            </button>
          </li>
          <li>
     
              <button
                class="btn-primary buy"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offUpCanvas"
                aria-controls="offUpCanvas"
              >
                바로구매
              </button>

          </li>
        </ul>
      </div>
    </div>
  </main>

  <!-- 오프캔버스 -->

  <div
    class="offcanvas offcanvas-start offUpCanvas"
    tabindex="-1"
    id="offUpCanvas"
    aria-labelledby="offUpCanvasLabel"
  >
    <div class="offcanvas-header col-xl-9 col-9 mx-auto">
      <div>
        <h5 class="offcanvas-title fw-700" id="offcanvasExampleLabel">
          {{ product.name }}
        </h5>
        <div class="productPrice fw-300 d-flex align-items-center">
          ￦
          <h3 class="fw-500">{{ formatPrice(product.price) }}</h3>
          <span class="fw-300">{{ formatPrice(product.OGprice) }}</span>
        </div>
      </div>

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body col-xl-9 col-12 mx-auto flex-column">
      <div>
        <div class="offcanvas-top d-flex align-items-start justify-content-between">
          <div class="d-flex flex-column col-xl-6 col-6 optionDiv">
            <div class="inputBox text-left">
              <label>옵션</label>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  :style="{ color: selectedOption2 ? 'black' : 'gray !important' }"
                >
                  {{ selectedOption2 || "옵션" }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="item in options3" :key="item.id">
                    <a class="dropdown-item" href="#" @click.prevent="selectOption2(item)">
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-6 buyDiv">
            <label>구매개수</label>
            <div class="d-flex countDiv">
              <button type="button" @click="decreaseCount()">
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>{{ product.count }}</p>
              <button type="button" @click="increaseCount()">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <div class="d-flex justify-content-between align-items-center delivaryDiv">
              <div>
                <span>배송비</span>
                <p><span>￦</span> {{ formatPrice(product.delivary) }}</p>
              </div>
              <p>ㆍ도서 산간지방 등은 추가 배송료가 적용될 수 있습니다</p>
            </div>
          </div>
        </div>

        <div class="offcanvas-bottom col-xl-12 col-12">
          <div class="d-flex align-items-center btns col-xl-8 col-12">
            <button
              type="button"
              class="btn-secondary wishlisht col-xl-3"
              data-bs-toggle="modal"
              data-bs-target="#wishalert"
            >
              WISHILIST
            </button>
            <button
              type="button"
              class="btn-secondary cart col-xl-3 col-6"
              data-bs-toggle="modal"
              data-bs-target="#cartalert"
            >
              CART
            </button>

          
              <button type="button" class="btn-primary col-xl-6 col-6 text-center buy" data-bs-dismiss="offcanvas">
                <router-link to="/order" style="color: #fff">
                바로구매
                      </router-link>
              </button>
      
          </div>
          <div
            class="text-right d-flex align-items-center justify-content-end totalPrice col-xl-4 col-12"
          >
            <p class="fw-400">총 상품금액</p>
            <h6 class="fw-900">{{ formatPrice(totalPrice) }} 원</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 모달 -->

  <div
    class="modal fade"
    id="wishalert"
    tabindex="-1"
    aria-labelledby="wishalertLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center fw-900">위시리스트 저장 완료</h3>
          <p class="text-center fw-300">위시리스트에 제품이 저장되었습니다.</p>
        </div>
        <div class="modal-footer single">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="cartalert"
    tabindex="-1"
    aria-labelledby="cartalertLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center fw-900">장바구니 저장 완료</h3>
          <p class="text-center fw-300">장바구니에 저장되었습니다.</p>
        </div>
        <div class="modal-footer single">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 리뷰모달 -->

  <div
    class="modal fade"
    id="reviewModal"
    tabindex="-1"
    aria-labelledby="reviewModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <h3 class="text-center fw-900">장바구니 저장 완료</h3>
          <p class="text-center fw-300">장바구니에 저장되었습니다.</p>
        </div>
        <div class="modal-footer single">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 문의클릭모달 -->

  <div
    class="modal fade useHeader"
    id="inquiryModal"
    tabindex="-1"
    aria-labelledby="inquiryModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <!-- Conditionally render content based on 'lock' -->
      <div v-if="selectedInquiry?.lock" class="modal-content lock">
        <div class="modal-header">
          <img :src="logoImg" alt="" />
        </div>
        <div class="modal-body">
          <div class="locked text-center">
            <i class="fa-solid fa-lock-keyhole"></i>
            <h5 class="fw-900">비밀번호를 입력해주세요.</h5>
            <input type="password" v-model="inputPassword" />
          </div>
        </div>
        <div class="modal-footer passwordFooter">
          <button
            type="button"
            class="btn btn-secondary col-xl-6 col-6"
            data-bs-dismiss="modal"
            @click="handlePasswordSubmit"
          >
            취소
          </button>
          <button
            type="button"
            class="btn btn-primary col-xl-6 col-6"
            @click="handlePasswordSubmit"
          >
            확인
          </button>
        </div>
      </div>

      <!-- Default modal content -->
      <div v-else class="modal-content">
        <div class="modal-header">
          <img :src="logoImg" alt="" />
        </div>
        <div class="modal-body">
          <div class="modalbodyTop position-relative">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <label class="fw-500">상품정보</label>
            <div class="d-flex align-items-center">
              <div class="imgBox">
                <img :src="product.img[0]" alt="" />
              </div>
              <div class="textBox">
                <h6 class="fw-500">{{ product.name }}</h6>
                <p class="fw-500"><span>￦</span> {{ product.price }}</p>
              </div>
            </div>
          </div>
          <div class="modalbodyBottom">
            <div>
              <label class="fw-500">문의내용</label>
              <textarea readonly>{{ selectedInquiry?.text || "" }}</textarea>
            </div>
            <div v-if="selectedInquiry?.reply">
              <label class="fw-500">답변내용</label>
              <textarea readonly>{{ selectedInquiry?.replyText || "" }}</textarea>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확인
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 문의작성모달 -->
  <div
    class="modal fade useHeader"
    id="inquiryWriteModal"
    tabindex="-1"
    aria-labelledby="inquiryWriteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <img :src="logoImg" alt="" />
        </div>
        <div class="modal-body">
          <div class="modalbodyTop position-relative">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <label class="fw-500">상품정보</label>
            <div class="d-flex align-items-center">
              <div class="imgBox">
                <img :src="product.img[0]" alt="" />
              </div>
              <div class="textBox">
                <h6 class="fw-500">{{ product.name }}</h6>
                <p class="fw-500"><span>￦</span> {{ product.price }}</p>
              </div>
            </div>
          </div>
          <div class="modalbodyBottom">
            <div class="inputBox">
              <label class="fw-500">문의유형</label>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  :style="{ color: product.inquiry.category ? 'black' : 'gray' }"
                >
                  {{ product.inquiry.category || "문의 유형을 선택해 주세요." }}
                </button>
                <ul class="dropdown-menu">
                  <li v-for="item in inquiryCategories" :key="item">
                    <a class="dropdown-item" href="#" @click.prevent="selectOption(item)">
                      {{ item }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="inquiryTitle d-flex flex-column">
              <label class="fw-500">문의제목</label>
              <input type="text" v-model="product.inquiry.title" />
            </div>
            <label class="fw-500">문의내용</label>
            <textarea v-model="product.inquiry.text"></textarea>
            <div class="inquiryPassword">
              <div class="d-flex align-items-center">
                <input type="checkbox" v-model="inquiryPassword.secreat" />
                <p><i class="fa-regular fa-lock"></i> 비밀글</p>
              </div>
              <input
                v-if="inquiryPassword.secreat"
                type="text"
                v-model="inquiryPassword.password"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="submitInquiry"
            data-bs-dismiss="modal"
          >
            작성
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 리뷰 더보기 모달 -->

  <div
    class="modal fade useHeader"
    id="reviewViewModal"
    tabindex="-1"
    aria-labelledby="reviewViewModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <img :src="logoImg" alt="" />
        </div>
        <div class="modal-body">
          <div class="modalbodyTop position-relative">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="d-flex align-items-center">
              <div class="imgBox">
                <img :src="product.img[0]" alt="" />
              </div>
              <div class="textBox">
                <i
                  class="fa-solid fa-star"
                  v-for="(star, j) in product.reviewList.reviewStar"
                  :key="j"
                ></i>
                <h6 class="fw-500">{{ product.name }}</h6>
                <p class="fw-500"><span>￦</span> {{ product.price }}</p>
              </div>
            </div>
            <div class="reviewMoreImage">
              <img
                v-for="(img, i) in selectedReview?.reviewImg"
                :key="i"
                :src="img"
                alt=""
              />
            </div>
          </div>
          <div class="modalbodyBottom">
            <label class="fw-500">리뷰내용</label>
            <textarea v-model="product.reviewList.reviewText" readonly></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            확안
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import logoImg from "@/assets/THELIFEOfPABLO.png";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  name: "productDetail",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      selectedInquiry: null,
      logoImg: logoImg,
      currentPage: 1, // Default active page
      totalPages: 3, // Total number of pages
      isExpanded: false,
      product: {
        img: [
          "https://balenciaga.dam.kering.com/m/1ed2ff42d980d130/Small-544351W2FB11000_X.jpg?v=3",
          "https://balenciaga.dam.kering.com/m/43abeff9b1e6071f/Small-544351W2GA15760_X.jpg?v=3",
          "https://balenciaga.dam.kering.com/m/411fbae57f11d017/Small-541624W2FB11000_X.jpg?v=4",
        ],
        name: "제품명이 들어갈 자리입니다.",
        text: "제품 설명이 들어갈 자리입니다.",
        price: 20000,
        OGprice: 40000,
        count: 1,
        delivary: 3000,
        detailImg: [
          "https://image.msscdn.net/display/images/common/2022/10/07/dd9dc92457964bde85ba10940b8b8204.jpg",
          "https://image.msscdn.net/display/images/common/2023/03/09/c3a85b1b92a449b483a3c464d9082eee.jpg",
          "https://image.msscdn.net/display/images/common/2024/02/29/ffb82eef4e1b49c7be9e8869e93877d6.jpg",
          "https://image.msscdn.net/images/prd_img/20241011094647630340454206708757799e4d.jpg",
          "https://image.msscdn.net/images/prd_img/2024101109464765167020700670875779f19f.jpg",
          "https://image.msscdn.net/images/prd_img/20241011094647564910792266708757789eb9.jpg",
          "https://image.msscdn.net/images/prd_img/202410110946477039286636667087577abdbf.jpg",
          "https://image.msscdn.net/images/prd_img/202410110946476105143095567087577950db.jpg",
          "https://image.msscdn.net/images/prd_img/202410110946476909123394867087577a8ae8.jpg",
          "https://image.msscdn.net/images/prd_img/202410110946476955252080367087577a9cee.jpg",
          "https://image.msscdn.net/display/images/common/2022/10/07/e7e33141a35747c18e5f30d6c9733c76.jpg",
          "https://image.msscdn.net/display/images/common/2022/10/07/e7e33141a35747c18e5f30d6c9733c76.jpg",
          "https://image.msscdn.net/display/images/common/2022/10/07/450c1f23e9db492b987f6c777af89439.jpg",
        ],
        reviewImg: [
          "https://img004.feelway.com/upfile010/GOODS/6888732529/181991001687873385f0c7c6b8fae1508e9009ba704936b727.jpeg",
          "https://eomisae.co.kr/files/attach/images/50382/658/068/117/a1ae886893965b45743a541549363dda.jpeg",
          "https://blog.kakaocdn.net/dn/zGpk0/btsIRlVtsUk/t5PyoNZMSiFEeJdWpVKVek/img.jpg",
          "https://image.babathe.com/goods/G341915033/G341915033_2.jpg/babathe/optimize",
          "https://img015.feelway.com/upfile009/GOODS/5506460274/5045650016983644880284f8a747da452744b804f068a3372e.jpeg",
        ],
        review: [],
        reviewList: [
          {
            reviewName: "김구매",
            reviewStar: 5,
            reviewText: "김구매입니다. 샀어요. 만족합니다.",
            date: "2024-10-10",
            reviewImg: [
              "https://img004.feelway.com/upfile010/GOODS/6888732529/181991001687873385f0c7c6b8fae1508e9009ba704936b727.jpeg",
              "https://eomisae.co.kr/files/attach/images/50382/658/068/117/a1ae886893965b45743a541549363dda.jpeg",
              "https://blog.kakaocdn.net/dn/zGpk0/btsIRlVtsUk/t5PyoNZMSiFEeJdWpVKVek/img.jpg",
              "https://image.babathe.com/goods/G341915033/G341915033_2.jpg/babathe/optimize",
              "https://img015.feelway.com/upfile009/GOODS/5506460274/5045650016983644880284f8a747da452744b804f068a3372e.jpeg",
            ],
          },
          {
            reviewName: "이불매",
            reviewStar: 1,
            reviewText: "이불매입니다. 샀어요. 되게 구립니다. 님들은 사지마세요.",
            date: "2024-09-10",
            reviewImg: [],
          },
        ],
        inquiry: [],
        inquiryList: [
          {
            category: "출고문의",
            title: "문의할래요",
            reply: true,
            text: "문의가 문의지 문의가 아니겠느냐나아아아",
            replyText: "답변입니다",
            lock: true,
            password: "1111",
          },
          {
            category: "배송문의",
            title: "배송문의할래요",
            reply: false,
            text: "이거 큰가요? 작은가요? 몇사이즈인가요?",
            lock: true,
            password: "1111",
          },
          {
            category: "결제문의",
            title: "돈이 안들어가요",
            reply: true,
            text: "ㅎㅎ",
            replyText: "답변입니다",
            lock: true,
            password: "1111",
          },
          {
            category: "환불문의",
            title: "돈이 안와요",
            reply: false,
            text: "돈좀 주세요 빨리주세요 서둘러주세요",
            lock: true,
            password: "1111",
          },
          {
            category: "반품문의",
            title: "보냈늗네 도착함/",
            reply: true,
            text: "이거 너무 별로에요 별 1개줄거임",
            replyText: "답변입니다",
            lock: false,
            password: "",
          },
        ],
      },
      inquiryCategories: ["출고문의", "배송문의", "결제문의", "환불문의", "반품문의"],
      inquiryPassword: {
        secreat: false,
        password: "",
      },
      swiperOptions: {
        autoplay: {
          delay: 3000, // 3 seconds between transitions
          disableOnInteraction: false, // Don't stop autoplay on interaction
        },
        navigation: true, // Enable navigation arrows
        pagination: {
          clickable: true, // Enable clickable pagination
        },
      },
      inquiryPassword: {
        secreat: false,
        password: "",
      },
      selectedOption: "최신순",
      selectedOption2: "옵션 선택",
      totalPrice: 0,
      inquiry: {
        type: "",
        name: "",
        email: "",
        title: "",
        text: "",
        file: null,
      },
      options: [
        {
          label: "문의유형 1",
          id: 0,
        },
        {
          label: "문의유형 2",
          id: 1,
        },
        {
          label: "문의유형 3",
          id: 2,
        },
        {
          label: "문의유형 4",
          id: 3,
        },
      ],
      options2: [
        {
          label: "최신순",
          id: 0,
        },
        {
          label: "평점순",
          id: 1,
        },
        {
          label: "유용한순",
          id: 2,
        },
      ],
      options3: [
        {
          label: "블랙",
          id: 0,
        },
        {
          label: "그레이",
          id: 1,
        },
       
      ],
      selectedReview: [],
      wishList: [],
      totalPages: 1, // Total number of pages
    };
  },
  methods: {
    resetSelectedReview() {
      this.selectedReview = null; // 초기화
    },
    openReviewModal(review) {
      this.selectedReview = review; // 선택된 리뷰 데이터 저장
    },
    closeReviewModal() {
      this.isModalVisible = false; // 모달을 숨김
    },
    openInquiryModal(inquiry) {
      this.selectedInquiry = inquiry; // Set selected inquiry when opening modal
      this.inputPassword = ""; // Reset password input
    },
    handlePasswordSubmit() {
      if (this.inputPassword === this.selectedInquiry.password) {
        this.selectedInquiry.lock = false; // Unlock the inquiry
      } else {
        alert("비밀번호가 틀렸습니다.");
      }
    },
     setActivePage(page) {
      this.currentPage = page; // Update the active page
    },
    toggleView() {
      this.isExpanded = !this.isExpanded; // 상태 전환
    },
    selectOption(item) {
      this.selectedOption = item.label; // Set the selected option's label
      this.inquiry.type = item.id; // Save the selected ID
    },
     selectOption2(item) {
      this.selectedOption2 = item.label; // Set the selected option's label
      this.inquiry.type = item.id; // Save the selected ID
    },
    increaseCount() {
      this.product.count++;
    },
    decreaseCount() {
      if (this.product.count > 1) {
        this.product.count--;
      }
    },
    formatPrice(price) {
      return price.toLocaleString();
    },
    setActivePage(page) {
      this.currentPage = page; // Update the active page
    },
    toggleHeart(index) {
      // Toggle the wishList state for the given index
      this.wishList[index] = !this.wishList[index];
    },
    submitInquiry() {
      const { category, title, text, secret, password } = this.product.inquiry;

      // Validation
      if (!category || !title || !text) {
        alert("모든 필드를 입력해주세요.");
        return;
      }
      if (secret && !password) {
        alert("비밀글 비밀번호를 입력해주세요.");
        return;
      }

      // Push inquiry to product.inquiry array
      this.product.inquiryList.push({
        category,
        title,
        text,
        secret: !!secret,
        password: secret ? password : null,
      });

      // Reset inquiry form fields
      this.product.inquiry = {
        category: null,
        title: "",
        text: "",
        secret: false,
        password: "",
      };

      alert("문의가 성공적으로 등록되었습니다!");
    },
    selectOption(item) {
      this.product.inquiry.category = item;
    },
    submitInquiry() {
      const { category, title, text } = this.product.inquiry;

      if (!category || !title || !text) {
        alert("모든 필드를 입력해주세요.");
        return;
      }

      this.product.inquiryList.push({ ...this.product.inquiry });
      this.product.inquiry = {
        category: null,
        title: "",
        text: "",
        secret: false,
        password: "",
      };

      alert("문의가 성공적으로 등록되었습니다!");
    },
  },

  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  computed: {
    totalPrice() {
      return this.product.price * this.product.count + this.product.delivary;
    },
    pages() {
      // Generate an array of page numbers from 1 to totalPages
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
};
</script>
