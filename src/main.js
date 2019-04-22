import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import {Field, Button, Cell, CellGroup, Tabbar, TabbarItem, Icon, List, NavBar, SwitchCell, Actionsheet, Toast, Tab, Tabs, Search} from 'vant'
import 'lib-flexible/flexible.js'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Cell)
Vue.use(List)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Field)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(Search)
Vue.use(Button)
Vue.use(CellGroup)
Vue.use(SwitchCell)
Vue.use(TabbarItem)
Vue.use(Actionsheet)
// Vue
//   .use(ContactCard)
//   .use(ContactList)
//   .use(ContactEdit)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
