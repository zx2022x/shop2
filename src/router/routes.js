import Home from '@/pages/Home'
import Login from'@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import  Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/view/ShopCart'
export default {
    
    routes:[
        {
               path:'./shopcart',
               name:'ShopCart',
               components:ShopCart,
        }
        ,
        {
           path:'/addcartsuccess',
           name:'addCartSuccess',
           component:AddCartSuccess,
           meta:{isShow:true},
        //    显示footer
        },

        {
            path:'/detail/:skuid',
            component:Detail,
            meta:{isShow:true},


        },
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
        


      
    ]}

