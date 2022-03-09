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
import Carsousel from '@/components/Carsousel'
import Pagination from '@/components/Pagination'
Vue.component(Carsousel.name,Carsousel)
Vue.component(Pagination.name,Pagination)
reCategoryList();
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this;
  },
  router,
  store,
}).$mount('#app')
