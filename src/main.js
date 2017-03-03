import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Alert from './components/alert'

Vue.use(ElementUI)
Vue.use(Alert)
new Vue({
  el: '#app',
  render: h => h(App)
})
