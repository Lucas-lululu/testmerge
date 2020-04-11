import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './common/reset.css'
import './common/common.css'
import $ from 'jquery'
import './static/layui/css/layui.css'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$=$;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
