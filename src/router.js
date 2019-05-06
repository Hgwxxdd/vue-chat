import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserInformation from '@/views/UserInformation.vue'

import Chat from '@/views/Chat.vue'
import Mock from '@/views/Mock.vue'
import Option from '@/views/Option.vue'
import Contact from '@/views/Contact.vue'
import Chatting from '@/views/Chatting.vue'
import DataCard from '@/views/DataCard.vue'
import AddContact from '@/views/AddContact.vue'
import AccountManage from '@/views/AccountManage.vue'
import Notification from '@/views/Notification.vue'
import AddContactValidate from '@/views/AddContactValidate.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/option",
      name: "option",
      component: Option
    },
    {
      path: "/mock",
      name: "mock",
      component: Mock
    },
    {
      path: "/userinformation",
      name: "userinformation",
      component: UserInformation
    },
    {
      path: "/accountManage",
      name: "accountManage",
      component: AccountManage
    },
    {
      path: "/addcontact",
      name: "addcontaact",
      component: AddContact
    },
    {
      path: "/chatting",
      name: "chatting",
      component: Chatting
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/datacard",
      name: "datacard",
      component: DataCard
    },
    {
      path: "/addcontactvalidate",
      name: "addcontactvalidate",
      component: AddContactValidate
    },
    {
      path: "/notification",
      name: "notification",
      component: Notification
    }
  ]
})
