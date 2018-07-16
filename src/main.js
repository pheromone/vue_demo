// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端点击300ms延迟
import fastclick from 'fastclick'
// 保证多个设备初始UI一样
import '@styles/reset.css'
// 保证移动端1ox边框
import '@styles/border.css'
// 引入iconfont
import '@styles/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
