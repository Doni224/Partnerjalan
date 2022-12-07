import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/styles.css";


global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

Vue.prototype.$pathApi = "https://plain-views-cry-103-191-109-11.loca.lt/"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
