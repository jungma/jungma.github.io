<template>
  <div id="app">
    
    <Nav></Nav>
    <div class="mainTab">
        <ul>
            <li><router-link to="/">홈</router-link></li>
            <li><router-link to="/Detail/0">신규</router-link></li>
            <li><router-link to="/Project">인기</router-link></li>
            <li><button>세일</button></li>
            <li><button>전체</button></li>
        </ul>
    </div> 

      <router-view v-bind:포스트들="포스트들" />
      

  </div>
</template>

<script>
import data from './assets/data.js'
import Nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav,
    // Card,
    // ShowHide,
  },
  data(){
    return {
      원룸들 : data,
      메세지 : '안녕',
      포스트들 : [
      { title : '첫 째 프로젝트 : JavaScript 쇼핑몰', content : '서버가 아닌 프론트엔드 환경에서 대부분의 기능을 만들어낼 수 있기 때문에 만들어보았습니다.', date : 'September 24, 2019',number : 0},
      { title : '둘 째 프로젝트 : 뷰로만든 뷰동산', content : '이제 앱보다는 PWA가 대세입니다. 뷰를 이용하면 매끈한 앱같은 웹을 만들 수 있습니다.', date : 'October 20, 2019', number : 1}
      ],
      MyItems: [
      { id: 1, name: 'web' },
      { id: 2, name: 'is' },
      { id: 3, name: 'free' }
    ],
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
