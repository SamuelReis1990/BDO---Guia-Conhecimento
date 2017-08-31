import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-material/dist/vue-material.css'

Vue.config.productionTip = false
var VueMaterial = require('vue-material')
Vue.use(VueMaterial)

// Vue.material.registerTheme('default', {
//   primary: 'pink',
//   accent: 'red',
//   warn: 'red',
//   background: 'red'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
