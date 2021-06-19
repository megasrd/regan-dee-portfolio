import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import anime from 'animejs';

Vue.use(Vuelidate)


Vue.config.productionTip = false

new Vue({
  anime,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
