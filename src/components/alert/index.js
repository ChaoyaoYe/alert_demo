const AlertComponent = require('./Alert.vue')
const Alert = {
  install: function(Vue) {
    Vue.component('Alert', AlertComponent)
  }
}
module.exports = Alert
