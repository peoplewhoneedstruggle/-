import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Fine from '@/components/Fine'
import Index from '@/pages/index'
import Content from '@/pages/content'
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/fine',
        name: 'Fine',
        component: Fine
    }, {
        path: '/content/:id',
        component: Content
    }]
})