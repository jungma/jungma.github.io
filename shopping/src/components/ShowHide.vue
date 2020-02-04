<template>
    <div class="showHide">
        <div class="showCont" v-if="보여줄까말까">이건 글자에요 숨김, 보임 처리를 할거에요</div>
        <b-button v-on:click="보여줄까말까 ^= true">{{버튼텍스트}}</b-button>
    </div>
</template>

<script>
export default {
  data(){
    return {
      버튼텍스트 : '숨김보임',
      보여줄까말까 : false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/shopping.scss";


</style>