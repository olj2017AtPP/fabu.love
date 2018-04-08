import Vue from 'vue'
import Router from 'vue-router'
import User from '../components/auth/auth.vue'
import AppDetail from '../components/appDetail/appDetail.vue'
import AppPreView from '../components/appDetail/appPreView.vue'
import UserInfo from '../components/user/userInfo.vue'
import Main from '../components/main/main.vue'
import Apps from '../components/appList/appList.vue'
import TeamMgr from '../components/team/teamMgr.vue'

Vue.use(Router)

export default new Router({
  // 去除#
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/apps',
      component: Main,
      children: [
        {
          path: '/apps',
          component: Apps
        },
        {
          path: '/app/:appId',
          name: 'AppDetail',
          component: AppDetail
        },
        {
          path: '/members',
          name: 'TeamMgr',
          component: TeamMgr
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: User
    },
    {
      path: '/user',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/:id',
      name: 'AppPreView',
      component: AppPreView
    }
  ]
})

