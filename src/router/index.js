import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes'
import store from '@/store'
import { nextTick } from 'vue/types/umd';

let originPush =VueRouter.prototype.push;
let originReplace=VueRouter.prototype.replace;
VueRouter.prototype.push=function(lacation,resolve,reject){
    if(resolve && reject)
    {
        originPush.call(this,location,resolve,reject);

    }
    else{
        originPush.call(this,location,()=>{},()=>{});
       
    }



}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this.location,resolve,reject)
    }
    

}

let router=new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return {x:0,y:0}
      }
})
router.beforeEach(async (to,from,next)=>{

   let token=store.state.user.token;
   let name=store.state.user.userInfo.name;
   if(token){
      if(to.path='/login'){
          next('/home');
      }
   }else{
       if(name){

       }else{
           try {

            await store.dispatch('getUserInfo');
            next();
        } catch (error) {
             await store.dispatch('userLogout');
             next('/login');
           }
        
       }
       next();
   }

})
export default router;
