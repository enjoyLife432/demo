import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '../components/home/home.vue';
import List from '../components/list/list.vue';
import Buy from '../components/buy/buy.vue';
import Type from '../components/buy/type.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list/:id',
      name: 'list',
      component: List
    },
    {
      path:'/buy/:storeName',
      name: 'buy',
      component: Buy,
      children: [
        {
          path: 'type/:id',
          component: Type
        }
      ]
    },
    {
      path:'*',
      component: Home
    }
  ]
})
