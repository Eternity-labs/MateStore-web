import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入进度条样式
import 'nprogress/nprogress.css'

//适配rem
import './utils/lib-flexible'

// 导入自己的全局样式
import './assets/css/global.css'

Vue.config.productionTip = false

Vue.use(ElementUI);
// router.afterEach((to, from, next) => {
//   console.log('路由跳转了')
//   window.scrollTo(0, 0);
//   // chrome
//   document.body.scrollTop = 0
//   // firefox
//   document.documentElement.scrollTop = 0
//   // safari
//   window.pageYOffset = 0
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
