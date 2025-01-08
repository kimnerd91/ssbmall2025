<template>
  <header
    :style="elementStyle"
    class="scrolling-element header2 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pl-1"
  >
    <div class="headerBottom w-100 d-flex align-items-center justify-content-between">
      <div class="megaMenuBtn col-xl-2 d-flex justify-content-center">
        <button
          type="button"
          class="gap-3 d-flex align-items-center"
          @click="megaMenuOpen()"
        >
          <i class="fa-solid fa-bars"></i>
          <h6 class="mb-0 fw-400">전체 카테고리</h6>
        </button>
      </div>
      <div class="listMenu col-xl-8">
        <ul class="d-flex align-items-center">
          <li>
            <router-link to="/event" class="fw-500">이벤트</router-link>
            <em></em>
          </li>
          <li>
            <router-link to="/promotion" class="fw-500">프로모션 1</router-link>
            <em></em>
          </li>
          <li>
            <router-link to="/promotion" class="fw-500">프로모션 2</router-link>
            <em></em>
          </li>
        </ul>
      </div>
      <div class="d-flex gap-2 col-xl-1 searchBtn justify-content-end">
        <button
          type="button"
          class="fw-300 gap-2 d-flex align-items-center"
          data-bs-toggle="offcanvas"
          href="#offcanvasSearch"
          role="button"
          aria-controls="offcanvasSearchLabel"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>SEARCH</span>
          <em></em>
        </button>
      </div>
      <!-- 메가메뉴 -->
      <transition name="slide">
        <div
          class="megaMenu position-absolute col-xl-12 col-12 d-flex" 
          v-if="this.megamenu == true"
        >
          <!-- 메가메뉴 1단 -->
          <div class="megaMenuFirst col-xl-12 col-12">
            <ul class="d-flex flex-column">
              <li
                v-for="(aaa, i) in category.cateOne"
                :key="i"
                @click="activeCategoryIndex = i"
                :class="{ active: i === activeCategoryIndex }"
              >
              <button type="button"  @click="!megaMenuOpen()">
              <router-link to="/productList" class="fw-400">{{ aaa.name }}</router-link>
              </button>
                
                <em></em>
              </li>
            </ul>
          </div>
          <div class="megaMenuInner col-xl-10 col-9 d-none">
            <!-- 메가메뉴 2단 -->
            <div class="megaMenuSecond d-none"> 
              <ul class="d-flex">
                <li
                  v-for="(bbb, j) in category.cateOne[activeCategoryIndex].cateTwo"
                  :key="j"
                >
                  <router-link to="/productList" class="fw-400" @click="megaMenuOpen()">{{
                    bbb.name
                  }}</router-link>
                  <em></em>
                  <!-- 메가메뉴 3단 -->
                  <ul class="d-flex flex-column">
                    <li v-for="(ddd, l) in bbb.cateThree" :key="l">
                      <router-link
                        to="/productList"
                        class="fw-300"
                        @click="megaMenuOpen()"
                        >{{ ddd }}</router-link
                      >
                      <em></em>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </header>
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
export default {
  name: "stickyHeader",
  data() {
    return {
      activeCategoryIndex: 0,
      isFixed: false,
      isMobile: false,
      megamenu: false,
      isMenuOpen: false,
      searchQuery: "",
      searchHistory: {}, // This will hold search term frequencies
      searched5: [],
      category: {
        cateOne: [
          {
            name: "SEASON 01",
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
            name: "SEASON 02",
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
    // 메가메뉴 오픈 기능
    megaMenuOpen() {
      this.megamenu = !this.megamenu;
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
        this.$router.push({
          path: "/search",
          query: { q: this.searchQuery },
        });

        this.closeOffcanvas();

        
        
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
    handleScroll() {
      if (window.scrollY > 50 && !this.isFixed) {
        this.isFixed = true;
      } else if (window.scrollY <= 50 && this.isFixed) {
        this.isFixed = false;
      }
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    },
    closeOffcanvas() {
      // Get the offcanvas element
      const offcanvasElement = document.getElementById("offcanvasSearch");

      // Add the necessary class to close the offcanvas
      if (offcanvasElement) {
        offcanvasElement.classList.remove("show"); // Hide the offcanvas
        offcanvasElement.style.visibility = "hidden"; // Ensure it's not visible
        document.body.classList.remove("offcanvas-backdrop"); // Remove the backdrop
      }
    },
      toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // 상태 토글
    },
  },
  created() {
    // Load the search history when the component is created
    this.loadSearchHistoryFromLocalStorage();
  },
  computed: {
    elementStyle() {
      return {
        position: this.isFixed ? "fixed" : "sticky",
        top: this.isFixed ? "0px" : this.isMobile ? "4.5rem" : "6.5rem",
        left: this.isFixed ? "0" : "0",
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateIsMobile(); // Check screen size on mount
    window.addEventListener("resize", this.updateIsMobile); // Listen for screen size changes
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateIsMobile); // Cleanup the listener
  },
};
</script>
