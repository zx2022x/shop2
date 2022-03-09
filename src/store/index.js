import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './home';
import search from './search'
import detail from './detail'
import shopcart from './shopcart';
import user from './user'
// const state={
//     count:1
// };
// const mutations={
//     ADD(state){
//         state.count++;
//     }
// };
// const actions={
//     add(commit){
//        commit("ADD");
//     }
// };
// const getters={

// }

export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        user
    }

    

})