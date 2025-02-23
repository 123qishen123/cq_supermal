import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

axios({
  url:'http://152.136.185.210:7878/api/m5/multidata'
}).then(res => {
  console.log(res)
})


// 131
