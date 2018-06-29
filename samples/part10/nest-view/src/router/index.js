import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Page from '@/components/Page'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles/:id',
      component: Article,
      children: [
        {
          path: 'pages/:page_num',
          component: Page
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
