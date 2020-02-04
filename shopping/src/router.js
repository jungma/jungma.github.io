import Vue from 'vue'
import Router from 'vue-router'
import MainTab from './components/MainTab.vue'
import Detail from './components/Detail.vue'

Vue.use(Router)
export default new Router({
routes: [
    {
        path: '/',
        name: 'MainTab',
        component: MainTab
    },
    {
        path: '/Detail/:id',
        name: 'Detail',
        component: Detail
    }

]
});
