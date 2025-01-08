<template>
  <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 mx-auto">
    <div class="eventWrap d-flex flex-wrap col-12">
      <div class="eventBox col-xl-4 col-sm-4 col-4" v-for="(item, i) in sortedEventList" :key="i">
        <router-link :to="{ name: '이벤트상세', params: { id: item.id } }">
          <img :src="item.img" alt="" />
          <h5 class="fw-500 text-left">{{ item.title }}</h5>
          <p class="fw-400 text-left">{{ item.text }}</p>
          <span class="text-left fw-400 d-block">{{ item.date }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "event",
  component: {},
  data() {
    return {
      eventList: [
        {
          id: 0,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/a3/01/3f/a3013f0ddc01e78a46b94de329d68aaa.jpg",
        },
        {
          id: 1,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/11/ea/42/11ea42f8e5f33c9f27f7e168d5284c68.jpg",
        },
        {
          id: 2,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/ba/45/fd/ba45fd06b30834d8375639b0ee19a15f.jpg",
        },
        {
          id: 3,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/5c/c8/fe/5cc8fe2d90c113fc789043915e3f17a2.jpg",
        },
        {
          id: 4,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/50/aa/7c/50aa7ce282fe4564248809ffc7922576.jpg",
        },
        {
          id: 5,
          title: "이벤트 명이 들어갈 곳 입니다.",
          text: "이벤트 설명이 들어갈 곳 입니다.",
          date: "2020-02-02",
          img: "https://i.pinimg.com/736x/47/8a/b8/478ab88bce034bceb3a032dc22262016.jpg",
        },
      ],
    };
  },
  computed: {
    sortedEventList() {
      return this.eventList.slice().sort((a, b) => b.id - a.id);
    },
    pages() {
      // Generate an array of page numbers from 1 to totalPages
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
  },
};
</script>
