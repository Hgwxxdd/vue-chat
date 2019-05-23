import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import UserInformation from '@/views/UserInformation.vue'

import news1 from '@/views/news1'
import news2 from '@/views/news2'
import news3 from '@/views/news3'
import Chat from '@/views/Chat.vue'
import Zone from '@/views/Zone.vue'
import Mock from '@/views/Mock.vue'
import News from '@/views/News.vue'
import Option from '@/views/Option.vue'
import Contact from '@/views/Contact.vue'
import ZoneEdit from '@/views/ZoneEdit.vue'
import ZoneCell from '@/views/ZoneCell.vue'
import Chatting from '@/views/Chatting.vue'
import DataCard from '@/views/DataCard.vue'
import AddContact from '@/views/AddContact.vue'
import CreateGroup from '@/views/CreateGroup.vue'
import schoolContact from '@/views/schoolContact.vue'
import Notification from '@/views/Notification.vue'
import AccountManage from '@/views/AccountManage.vue'
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
    },
    {
      path: "/creategroup",
      name: "creategroup",
      component: CreateGroup
    },
    {
      path: "/zone",
      name: "zone",
      component: Zone
    },
    {
      path: "/zonecell",
      name: "zonecell",
      component: ZoneCell
    },{
      path: "/zoneedit",
      name: "zoneedit",
      component: ZoneEdit
    },
    {
      path: "/News",
      name: "news",
      component: News
    },
    {
      path: "/news1",
      name: "news1",
      component: news1
    },
    {
      path: "/news2",
      name: "news2",
      component: news2
    },
    {
      path: "/news3",
      name: "news3",
      component: news3
    }, {
      path:"/schoolcontact",
      name:"schoolContact",
      component: schoolContact
    }
  ]
})
