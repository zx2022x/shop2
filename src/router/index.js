import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import Home from '@/pages/Home'
import Login from'@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

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
export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{
                show:true
            }
        },
        {
             path:'/login',
             component:Login,
             meta:{
                show:false
            }
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/search/:keyword',
            component:Search,
            meta:{
                show:true
            },
            name:'search'
            
            


        },
        {
            path:'*',
            redirect:'/home'
        }
        


      
    ]

})