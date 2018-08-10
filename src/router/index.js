import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/IndexPage'
import My from '@/components/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
