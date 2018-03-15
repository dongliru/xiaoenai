import Vue from 'vue'
import App from './App.vue'
import xiaoenai from './components/xiaoenai.vue'
import dynamic from './components/dynamic.vue'
import sweetWords from './components/sweetWords.vue'
import found from './components/found.vue'
import me from './components/me.vue'
import twoPerson from './components/dynamic/twoPerson.vue'
import community from './components/dynamic/community.vue'
import album from './xiaoenai/album.vue'
import diary from './xiaoenai/diary.vue'
import anniversary from './xiaoenai/anniversary.vue'
import startSleep from './xiaoenai/startSleep.vue'
import aunts from './xiaoenai/aunts.vue'
import hot from './components/dynamic/community/hot.vue'
import fresh from './components/dynamic/community/fresh.vue'
import attention from './components/dynamic/community/attention.vue'
import VueRouter from 'vue-Router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode:'history',
  routes:[
    {path:'/',component:xiaoenai},
    {path:'/dynamic',component:dynamic,
     children: [
        {
          path: '',    // 这里的路径怎么设置，怎么路由不是/dynamic/twoPerson   而是/twoPerson
          component: twoPerson
        },
        {
          path: 'twoPerson',    // 这里的路径怎么设置，怎么路由不是/dynamic/twoPerson   而是/twoPerson
          component: twoPerson
        },{
          path:'community',
          component:community,
            children:[
              {
                path:'',
                component:hot
              },{
                path:'fresh',
                component:fresh
              },{
                path:"attention",
                component:attention
              }
            ]
        }]
    },
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
