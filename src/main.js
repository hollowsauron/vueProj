import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios' 
import  router from'./router'

import service from '../service'

Vue.prototype.service=service
Vue.config.productionTip = false
Vue.use(elementUi)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
