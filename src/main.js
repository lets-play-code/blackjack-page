import Vue from 'vue'
import App from './App.vue'
import Resource from 'vue-resource'

Vue.use(Resource)
Vue.config.productionTip = false
Vue.http.options.root = 'http://localhost:8080'
new Vue({
  render: h => h(App),
}).$mount('#app')
