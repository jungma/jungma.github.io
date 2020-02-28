
<template>
    <div class="detail">
        <transition name="fade"> <div v-show="show" v-bind:style="styleobj">{{ $route.params.id }}</div></transition>
    </div> 
</template>

<script>
export default {

    props : {
        포스트들 : Array,
    },
    data(){
     return {
            show:true,
            styleobj :{
                  fontSize:'30px',
                  color:'red'
             }
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