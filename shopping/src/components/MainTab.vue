<template>
    <div class="mainTab">
        <ul>
            <li><router-link to="/">홈</router-link></li>
            <li><router-link to="/Detail">신규</router-link></li>
            <li><button>인기</button></li>
            <li><button>세일</button></li>
            <li><button>전체</button></li>
        </ul>
    </div> 
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/reset.scss";
.mainTab{
    border-top: 1px solid rgb(227, 229, 232);
    border-bottom: 1px solid rgb(227, 229, 232);
    text-align:center;
    li{
        display:inline-block;
        width:105px;
        height:54px;
        font-size:15px;
        line-height:54px;
    }
    button{
        box-shadow: none;
        outline: none;
        border:0;
        background:none;
    }
    .router-link-exact-active{position:relative;color:#000;font-weight:bold;display:block;}
    .router-link-exact-active:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:3px;background:#000}
}
</style>