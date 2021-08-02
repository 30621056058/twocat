import Vue from 'vue'
import Router from 'vue-router'
// 
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login';
import firstpage from '@/components/firstpage';
import register from '@/components/register';
import content from '@/components/content';
import trya from '@/components/trya';

Vue.use(Router)

export default new Router({
  // base: '/history',
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',  
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/trya',
      name: 'trya',
      component: trya
    }
  ]
})
