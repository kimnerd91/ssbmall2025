 /* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import AOS from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const app = createApp(App)
app.use(AOS);
app.use(router)
// Axios 설정
axios.defaults.baseURL = 'http://localhost:8080'
app.config.globalProperties.$http = axios
app.component('Swiper', Swiper);
app.component('SwiperSlide', SwiperSlide);

// 요청 인터셉터
axios.interceptors.request.use(
    (error) => {
        console.error('[Request Error]', error);
        return Promise.reject(error);
    }
);

// 응답 인터셉터
axios.interceptors.response.use(
    (error) => {
        console.error('[Response Error]', error);
        return Promise.reject(error);
    }
);

app.mount('#app')