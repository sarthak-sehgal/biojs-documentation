import Vue from 'vue'
import App from './App.vue'
import navBar from './components/nav.vue'

Vue.component('nav-bar', navBar);

new Vue({
  el: '#app',
  render: h => h(App)
})
