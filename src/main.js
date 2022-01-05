import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import router from './router'

import App from './App.vue'

Vue.use(VueCompositionAPI)

const app = new Vue({
  render: (h) => h(App),
  router
})

app.$mount('#app')
