import {reqCartList,reqDeleteCart, reqDeleteCartById,reqUpdateCheckedById} from 'api/index'

const state={
    CartList:[]
};
const mutations={

    GETCARTLIST(state,cartList){
        state.cartList=cartList;
    }

};
const actions={
   async getCartList({commit}){
       let result =await reqCartList();
       if(result.code==200){
            commit('GETCARTLIST',result.data);
       }

   },
        async deleteCartListBySkuId({commit},skuId){
              let result= await reqDeleteCartById(skuId);
              if(result.code==200){
                  return 'ok';
              }else{
                  return Promise.reject(new Error('faile'));

              }

        },
       async UpdateCheckedById({commit},{skuId,isChecked}){
          let result  =await reqUpdateCheckedById(skuId,isChecked);
          if(result.code==200){
              return 'ok';
          }else{
              return Promise.reject(new Error('faile'));
          }
        },
        deleteAllCheckedCart({dispatch,getters}){
             getters.cartList.cartInfoList.forEach(item=>{
             let PromiseAll=[];
             let promise=   item.isChecked==1 ? dispatch('deleteCartListBySkuId',item.skuId): '';
             PromiseAll.push(promise);

            });
            return Promise.all(PromiseAll);
        },
        updateAllCartChecked({dispatch,state},isChecked){
             let promiseAll=[];
             state.cartList[0].cartInfoList.forEach(item=>{
               let promise= dispatch('UpdateCheckedById',{skuId:item.skuId,isChecked})
               promiseAll.push(promise);

            })
              return Promise.all(PromiseAll);

        }
};
const getters={
    cartList(state){
        return state.carList[0] || {}
    }
};
export default{
    state,
    mutations,
    actions,
    getters,
}