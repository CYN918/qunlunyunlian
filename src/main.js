import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import baseCont from './router/baseCont'
import infiniteScroll from 'vue-infinite-scroll'

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';

// 按需引入部分组件
//import { Cell, Checklist } from 'minu-ui';
//Vue.component(Cell.name, Cell);
//Vue.component(Checklist.name, Checklist);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


axios.interceptors.request.use(function (config) {
    var token = window.sessionStorage.token
    if (token) {
      config.headers['csrf-token']  = token
    }else{
      config.headers['csrf-token']  = null
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })

axios.interceptors.response.use(
response => {
    return response
},
error => {
    if (error.response) {
    switch (error.response.status) {
        case 403:
        // 返回 403 清除token信息并跳转到登录页面
        window.sessionStorage.removeItem("token")
        router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
        })
    }
    }
    // return Promise.reject(error.response.data)   // 返回接口返回的错误信息
})

//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
//Vue.use(ElementUI)

router.beforeEach(function(to,from,next){
    // chrome
    document.body.scrollTop = 0;
    // firefox
    document.documentElement.scrollTop = 0;
    // safari
    window.pageYOffset = 0;

    if(to.meta.title){
        document.title = to.meta.title; 
    }else{
        document.title = '';
    };
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if(isWeixin){
       let wxinfo = window.sessionStorage.wxinfo
      if (!wxinfo && to.path != "/author") {
        window.localStorage.setItem("beforeLoginUrl", to.fullPath);
        next("/author");
        return false;
      }
    }
    next();
});


Vue.use(VueAxios, axios);
Vue.use(infiniteScroll);

Vue.prototype.baseCont = baseCont;
Vue.config.productionTip = false;

//设置eventbus来传值
window.eventBus = new Vue();


import Vuex from 'vuex'
Vue.use(Vuex)

function storeLocalStore (state) {
  window.localStorage.setItem("userMsg",JSON.stringify(state));
}
const store = new Vuex.Store({
    modules: {
    tags:[],
    curTagsIndex:"-1",
    },
  mutations: {
    SET_CURTAGS: (state, index) => {
      state.curTagsIndex = index
    },
  }
})

export default store

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',
  data(){
  	return {
  		bus:new Vue()/*中央数据管理组件*/
  	}
  }
})