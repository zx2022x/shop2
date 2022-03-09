import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css';
import store from '@/store'
const requests=axios.create({
    baseURL:'/api',
    timeout:5000,


})

requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    // ?????
    if(store.state.user.token){
        config.headers.token=store.state.user.token;
    }

      nprogress.start();
       return config;
})
requests.interceptors.request.use((res)=>{
 nprogress.done();
  return res.data
},(error)=>{
    return Promise.reject(new Error('false'));
});













export default requests;