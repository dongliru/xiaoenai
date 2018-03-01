import Vue from 'vue'
import App from './App.vue'
import dynamic from './components/dynamic'
import sweetWords from './components/sweetWords'
import found from './components/found'
import me from './components/me'
import VueRouter from 'vue-Router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:App},
    {path:'/dynamic',component:dynamic},
    {path:'/sweetWords',component:sweetWords},
    {path:'/found',component:found},
    {path:'/me',component:me},
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
