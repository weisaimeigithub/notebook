// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store/vuex.js' 
Vue.config.productionTip = false

//导航守卫，根据是否登录而路由
router.beforeEach((to,from,next)=>{
  if(to.meta.logined){
    if(sessionStorage.login==1){
      //若登录状态为1
      next();
    }else{
      next({
        path:'/home/login',
      });
    }
    }else{
      next();
    }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  
})
