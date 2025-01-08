import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Main from "../views/MainPage.vue"
import Join from "../views/JoinPage.vue"
import Csc from "../views/customerService.vue"
import Faq from "../components/FAQ.vue"
import Notice from "../components/Notice.vue"
import NoticeDetail from "../components/NoticeDetail.vue"
import Inquiry from "../components/Inquiry.vue"
import Event from "../views/event.vue"
import EventDetail from "../components/EventDetail.vue"
import Promotion from "../views/promotion.vue"
import ProductList from "../views/productList.vue"
import Search from "../views/Search.vue"
import ProductDetail from "../views/productDetail.vue"
import Order from "../views/order.vue"
import Mypage from "../views/mypage.vue"
import Profile from "../components/Profile.vue"
import OrderHistory from "../components/orderHistory.vue"
import OrderDetail from "../components/orderDetail.vue"


const routes = [{
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/join',
    name: '회원가입',
    component: Join
  },
  {
    path: '/csc',
    name: '고객센터',
    component: Csc
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: Faq
  },
  {
    path: '/notice',
    name: '공지사항',
    component: Notice
  },
  {
    path: '/notice/:id',
    name: 'noticeDetail',
    component: NoticeDetail
  },
  {
    path: '/inquiry',
    name: '1:1문의',
    component: Inquiry
  },
  {
    path: '/event',
    name: '이벤트',
    component: Event,
  },
  {
    path: '/event/:id',
    name: '이벤트상세',
    component: EventDetail
  },
  {
    path: '/promotion',
    name: '프로모션',
    component: Promotion
  },
  {
    path: '/productList',
    name: '상품리스트',
    component: ProductList
  },
  {
    path: '/search',
    name: '검색상품리스트',
    component: Search
  },
  {
    path: '/productDetail',
    name: '상품디테일',
    component: ProductDetail
  },
  {
    path: '/order',
    name: '결제',
    component: Order
  },
  {
    path: '/mypage',
    name: '마이페이지',
    component: Mypage
  },
   {
     path: '/profile',
     name: '프로필',
     component: Profile
  },
   {
     path: '/orderHistory',
     name: '주문내역조회',
     component: OrderHistory
  },
   {
     path: '/orderDetail',
     name: '주문상세',
     component: OrderDetail
   },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Add scrollBehavior function here
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If there's a saved position (e.g., back/forward navigation), use it
      return savedPosition;
    } else {
      // Scroll to the top of the page for new navigation
      return {
        top: 0
      };
    }
  },
});

export default router