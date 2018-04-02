import Vue from 'vue'
import App from './App.vue'
import navBar from './components/nav.vue'
import documentation from './components/documentation.vue'
import '../node_modules/propdoc/style.scss';

Vue.component('nav-bar', navBar);
Vue.component('documentation', documentation);

new Vue({
  el: '#app',
  render: h => h(App)
})
