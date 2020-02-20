import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: Home
        },
        {
            path: '/Detail/:id',
            name: 'Detail',
            component: Detail
        }
    ]
});
