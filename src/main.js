import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav);
import router from '@/router/index.js'
Vue.config.productionTip = false
import {reCategoryList} from '@/api'
import store from '@/store'
import "@/mock/mockServe"
import 'swiper/css/swiper.css'
reCategoryList();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
