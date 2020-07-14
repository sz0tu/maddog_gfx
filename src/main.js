import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import main from './main.scss'
import VueKinesis from 'vue-kinesis'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)

Vue.use(VueKinesis)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

