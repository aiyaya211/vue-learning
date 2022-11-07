import Vue from 'vue'
import App from './App.vue'
import asyncComponent from './mycomponents/asyncComponent.vue';
import router from './router/router'

// 过了1000ms之后才会渲染异步组件的内容
Vue.component('async-component', function(resolve){
  setTimeout(function(){
    // 向resolve回调传递组件定义
    resolve(asyncComponent);
  }, 1000);
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
