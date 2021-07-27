import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/utils/router.js'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
