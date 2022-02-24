import {reCategoryList,reGetBannerList,reFloorList} from '@/api';

const state={
    categoryList:[],
    bannerList:[],
    floorList:[],

};
const mutation={
    CATEGORYLIST(state,categoryList){
         state.categoryList=categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;

    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    
    }

};
const actions={
    async categoryList({commit}){
        let result =await reCategoryList();
        if(result.code===200){
            commit('CATEGORYLIST',result.data);
        }
    },

    async GetBannerList({commit}){
     let result=  await  reGetBannerList();
     if(result.code==200){
         commit('GETBANNERLIST',result.data);
     }
    },
    async getFloorList({commit}){
        let result=await reFloorList();
        if(result.code=200){
            commit('GETFLOORLIST',result.data);

        }
    }
    
};
const getters={};
export default{
    state,
    mutation,
    action,
    getter,
}