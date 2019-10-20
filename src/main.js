import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import List from './components/List'
import './../node_modules/bulma/css/bulma.css'
const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/list', component: List },
  { path: '/', component: Home }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
