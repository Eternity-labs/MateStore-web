// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './styles/index.css'
import './styles/element-ui.css'
// 导入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './utils/rem'
import 'babel-polyfill'

import Web3 from 'web3'

Vue.prototype.$web3 = new Web3(Web3.givenProvider)

Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
