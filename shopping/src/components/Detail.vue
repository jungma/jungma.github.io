
<template>
    <div class="detail">
        <transition name="fade"> 
            <div v-show="show" v-bind:style="styleobj">{{ $route.params.id }}  <div v-for="상품 in 상품들" :key="상품">{{ 상품 }}</div></div> 
           
        </transition>
   
    </div> 
</template>

<script>
export default {

    props : {
        포스트들 : Array,
    },
    data(){
     return {
            상품들:['갤', '아', '엘'],
            show:true,
            styleobj :{
                  fontSize:'30px',
                  color:'red'
             },
             보여주까여 : true,
     }
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/reset.scss";
.fade-enter-active, .fade-leave-active {
            transition: opacity 2s
         }
         .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0
         }
</style>