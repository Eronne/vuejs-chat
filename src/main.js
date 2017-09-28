// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Bourgeon from 'bourgeon'
import App from './App'
import plugins from './plugins/index'

Vue.use(Bourgeon, {
  locales: ['fr', 'en']
})

Vue.use(plugins, {
  api: 'https://bddi-chat2017.herokuapp.com/'
})

export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
