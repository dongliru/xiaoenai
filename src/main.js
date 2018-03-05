import Vue from 'vue'
import App from './App.vue'
import xiaoenai from './components/xiaoenai.vue'
import dynamic from './components/dynamic.vue'
import sweetWords from './components/sweetWords.vue'
import found from './components/found.vue'
import me from './components/me.vue'
import album from './xiaoenai/album.vue'
import diary from './xiaoenai/diary.vue'
import anniversary from './xiaoenai/anniversary.vue'
import startSleep from './xiaoenai/startSleep.vue'
import aunts from './xiaoenai/aunts.vue'
import VueRouter from 'vue-Router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:xiaoenai},
    {path:'/dynamic',component:dynamic},
    {path:'/sweetWords',component:sweetWords},
    {path:'/found',component:found},
    {path:'/me',component:me},
    {path:'/album',component:album},
    {path:'/diary',component:diary},
    {path:'/anniversary',component:anniversary},
    {path:'/startSleep',component:startSleep},
    {path:'/aunts',component:aunts},
  ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
