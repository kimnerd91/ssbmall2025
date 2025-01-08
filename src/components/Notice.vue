<template>
  <main class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
    <div class="mx-auto col-xl-10 notice">
      <h1 class="text-center fw-900">공지사항</h1>
      <div data-aos="fade-up" data-aos-duration="1500">
        <table>
          <thead>
            <tr>
              <th class="col-2 fw-700">번호</th>
              <th class="col-8 fw-700 text-left">제목</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(list, i) in sortedNoticeList" :key="i">
              <td class="fw-400">
                <router-link :to="{ name: 'noticeDetail', params: { id: list.id } }">
                  {{ list.id + 1 }}
                </router-link>
              </td>
              <td class="fw-400 text-left">
                <router-link :to="{ name: 'noticeDetail', params: { id: list.id } }"
                  >{{ list.title }}
                </router-link>
              </td>
              <td class="fw-400">
                <router-link :to="{ name: 'noticeDetail', params: { id: list.id } }"
                  >{{ list.date }}
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
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
  </main>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
/* eslint-disable */
AOS.init();

export default {
  name: "notice",
  components: {},
  data() {
    return {
      currentPage: 1, // Default active page
      totalPages: 1, // Total number of pages
      noticeList: [
        {
          id: 0,
          title: "[공지] 공지사항들이 들어갈 자리입니다. 1",

          date: "2022-02-02",
        },
        {
          id: 1,
          title: "[공지] 공지사항들이 들어갈 자리입니다. 2",

          date: "2022-02-02",
        },
        {
          id: 2,
          title: "[공지] 공지사항들이 들어갈 자리입니다. 3",

          date: "2022-02-02",
        },
        {
          id: 3,
          title: "[공지] 공지사항들이 들어갈 자리입니다. 4",

          date: "2022-02-02",
        },
        {
          id: 4,
          title: "[공지] 공지사항들이 들어갈 자리입니다. 5",

          date: "2022-02-02",
        },
      ],
    };
  },
  computed: {
    sortedNoticeList() {
      return this.noticeList.slice().sort((a, b) => b.id - a.id);
    },
    pages() {
      // Generate an array of page numbers from 1 to totalPages
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
  methods: {
    setActivePage(page) {
      this.currentPage = page; // Update the active page
    },
  },
};
</script>
