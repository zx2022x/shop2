import requests from './request';
import mockRequests from './mockAjax'
import { mock } from 'mockjs';
export const reCategoryList =()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reGetBannerList =()=>mockRequests.get('/banner');
export const reFloorList=()=>mockRequests.get('/floor');