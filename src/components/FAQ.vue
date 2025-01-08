<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="mx-auto col-xl-6 faq">
      <h1 class="text-center fw-900">자주묻는질문</h1>
      <nav class="nav" data-aos="fede-up" data-aos-duration ="1500">
        <button
          class="nav-link"
          :class="{ active: selectedTab === i }"
          v-for="(zzz, i) in faqCate"
          :key="i"
          @click="selectTab(i)"
        >
          {{ zzz.name }}
        </button>
      </nav>
      <div class="mx-auto col-11" >
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item" v-for="item in filteredFaq" :key="item.id">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush-collapse' + item.id"
                :aria-controls="'flush-collapse' + item.id"
                aria-expanded="false"
              >
                <span class="fw-300 col-2">카테고리</span>
                <p class="fw-300 col-10">
                  {{ item.title }}
                </p>
              </button>
            </h2>
            <div
              :id="'flush-collapse' + item.id"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {{ item.content }}
              </div>
            </div>
          </div>
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
    <SSwiper />
  </main>
</template>

<script>
import SSwiper from "@/components/SmallBanner";
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable */
AOS.init();

export default {
  name: "FAQ",
  components: {
    SSwiper,
  },
  data() {
    return {
      currentPage: 1, // Default active page
      totalPages: 3, // Total number of pages
      selectedTab: 0,
      faqCate: [
        { name: "카테고리 1" },
        { name: "카테고리 2" },
        { name: "카테고리 3" },
        { name: "카테고리 4" },
        { name: "카테고리 5" },
        { name: "카테고리 6" },
      ],
      faq: [
        {
          id: 1,
          title: "질문 1 - 카테고리 1",
          content: "답변 1",
          category: 0, // Category index
        },
        {
          id: 2,
          title: "질문 2 - 카테고리 2",
          content: "답변 2",
          category: 1,
        },
        {
          id: 3,
          title: "질문 3 - 카테고리 3",
          content: "답변 3",
          category: 2,
        },
        {
          id: 4,
          title: "질문 4 - 카테고리 4",
          content: "답변 3",
          category: 3,
        },
        {
          id: 5,
          title: "질문 5 - 카테고리 5",
          content: "답변 5",
          category: 4,
        },
        {
          id: 6,
          title: "질문 6 - 카테고리 6",
          content: "답변 6",
          category: 5,
        },
        {
          id: 7,
          title: "질문 7 - 카테고리 7",
          content: "답변 7",
          category: 1,
        },
      ],
    };
  },
  computed: {
    filteredFaq() {
      // 현재 선택된 탭의 FAQ만 필터링
      return this.faq.filter((item) => item.category === this.selectedTab);
    },
    pages() {
      // Generate an array of page numbers from 1 to totalPages
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
    setActivePage(page) {
      this.currentPage = page; // Update the active page
    },
  },
};
</script>
