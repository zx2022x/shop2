import requests from './request';
import mockRequests from './mockAjax'
import { mock } from 'mockjs';
export const reCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reGetBannerList =()=>mockRequests.get('/banner');
export const reFloorList=()=>mockRequests.get('/floor');
export const reGetSearchInfo=(params)=>requests({url:'/list',method:'post',data:params})
export const reqGoodsInfo=(skuId)=>requests({url:`/api/item/${skuId}`,method:'get'});
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
export const reqCartList=()=>requests({url:`/cart/cartList`,method:'get'})
export const reqDeleteCartById=()=>requests({url:`/cart/deleteCart/${skuId}`,method:`delete`})
export const reqUpdateCheckedById=(skuId,isChecked)=>{requests({url:`/cart/checkCart/${skuID}/${isChecked}`,method:`get`})}
export const reqLogin=(mobile,password)=>requests({url:`/user/passport/login/${mobile}/${password}`,method:'post'});
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});
export const reqUserRegister=(data)=>requests({url:`/user/passport/register`,data,methods:'post'})
export const reqUserLogin=(phone,password)=>requests({url:`/user/passport/login`,data,method:'post'})
export const reqUserInfo=()=>requests({url:`/user/passport/auth/getUserInfo`,method:'get'})
export const reqLogout=()=>requests({url:"/user/passport/logout",method:'get'})
