import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/reset.css'
import './common/common.css'

import {axios_in} from './until/axios.js'
import qs from 'qs'
import config from './common/config.js'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$qs=qs;
Vue.prototype.$axios=axios_in;
Vue.prototype.config = config;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
