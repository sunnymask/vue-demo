// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/bootstrap-3.3.7-dist/css/bootstrap.css'
import store from './store'
//通过components下Publi里的index.js文件导入组件
import components from './components/Public/index'
import shopData from '@/data/shopData.json'
//对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key])
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted() {
    if (this.$store.state.shops.length == 0) {
      this.$store.commit('initShops', shopData)
    }
  }
})
