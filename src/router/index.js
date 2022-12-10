import Vue from 'vue'
import Router from 'vue-router'
import mycp1 from '@/components/mycp1'
import Search from '@/components/Search'
import Hi from '@/components/Hi'
import Index from '@/components/index'

Vue.use(Router)

// 配置组件的路由路径
export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'index',
      component: Index
    },

    // 作业4路由
    {
      path: '/mycp1',
      name:'mycp1',
      component: mycp1
    },
    {
      path:'/Search',
      name:'Search',
      component: Search
    },

    {
      path:'/hi',
      name:'Hi',
      component:Hi
    }
  ]
})



