
<template>
    <div class="detail">
        
        <h4> {{포스트들[$route.params.id].title}} </h4>
        <p>디테일</p>
    </div> 
</template>

<script>
export default {

    props : {
        포스트들 : Array,
    }

}
</script>

<style lang="scss" scoped>
@import "../assets/reset.scss";
</style>