<template>
  <div id="app">
    <!-- <div class="container">
      <div class="row">
        <Card v-for="(자료,i) in 원룸들" v-bind:원룸들="자료" :key="i"></Card>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <ShowHide></ShowHide>
      </div>
    </div> -->
    <Nav></Nav>
    <MainTab></MainTab>
    <router-view />
    홈
  </div>
</template>

<script>
// import Card from './components/Card.vue'
// import ShowHide from './components/ShowHide.vue'
import data from './assets/data.js'
import Nav from './components/Nav.vue'
import MainTab from './components/MainTab.vue'

export default {
  name: 'app',
  components: {
    Nav,
    MainTab,
    // Card,
    // ShowHide,
  },
  data(){
    return {
      원룸들 : data,
      메세지 : '안녕',
    }
  },
  methods: {
    // priceSort(){
    //   // var 어레이 = [5,3,4,1,2];
    //   // 어레이.sort(function(a,b){
    //   //   return a - b
    //   // });
    //   //원룸들 = [{},{},{},{}]
    //   this.원룸들.sort(function(a,b){
    //     return a.price - b.price
    //   });
    //   //원룸들이라는 데이터를 정렬 해주셈 ~
    // },
    // sortBack(){

    // },
  }
}
</script>


<style lang="scss" scoped>
@import "./assets/reset.scss";
</style>