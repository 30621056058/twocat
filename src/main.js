// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/iconfont/iconfont.css'


import { Button } from 'vant';

Vue.use(Button);

import { Search } from 'vant';

Vue.use(Search);

import { PullRefresh } from 'vant';

Vue.use(PullRefresh);

import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);

import { Image as VanImage } from 'vant';

Vue.use(VanImage);

import { NavBar } from 'vant';

Vue.use(NavBar);

import { Icon } from 'vant';

Vue.use(Icon);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
