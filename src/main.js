import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import 'lib-flexible/flexible.js'
// import socket from '../socket';

import {Field, Button, Cell, CellGroup, Tabbar, TabbarItem, Icon, List, NavBar, SwitchCell, ActionSheet, Toast, Tab, Tabs, Search, Checkbox, CheckboxGroup, DatetimePicker, Dialog, Swipe, SwipeItem, IndexBar, IndexAnchor, Collapse, CollapseItem, ContactCard} from 'vant'
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
Vue.use(Dialog)
Vue.use(CellGroup)
Vue.use(SwitchCell)
Vue.use(TabbarItem)
Vue.use(ActionSheet)
Vue.use(ContactCard)
Vue.use(DatetimePicker)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(Swipe).use(SwipeItem);
Vue.use(IndexBar).use(IndexAnchor);
Vue.use(Collapse).use(CollapseItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
