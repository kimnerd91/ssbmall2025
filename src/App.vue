<template>

  <Header />
  <Sticky />
  <router-view/>
  <MobileHeader />
  <Footer />
</template>



<script>

/* eslint-disable */
import Header from '@/components/Header.vue';
import Sticky from '@/components/StickyHeader'

import Footer from '@/components/Footer'
import MobileHeader from '@/components/MobileHeader'

export default {
  name: "",
  components: {
    Header,
    Sticky,

    Footer,
    MobileHeader
  }
}
</script>

<style lang="scss">
@use '@/assets/scss/_variabled.scss';



#app {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}



</style>
