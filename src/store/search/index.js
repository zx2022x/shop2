import { reGetSearchInfo } from "api";

const state={
    searchInfo:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
         state.searchList=searchList;
    }
};

const actions={
   async getSearchList({commit},params={}){
       let result= await reGetSearchInfo(params)
       if(result.code==200){
           commit('GETSEARCHLIST',result.data);
       }
    }
};
const getters={
    goodsList(state){

        return state.searchList.goodsList ||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList;

    },
    attrsList(state){
        return state.searchList.attrsList
    }
    
};


export default{
    state,
    actions,
    mutations,
    getters,

}