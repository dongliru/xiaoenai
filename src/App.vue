<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
     <div class= 'footer'>
      <ul class="clearfix">
        <li><router-link to="/"><img src="./assets/xiaoenai.png" alt=""><br>小恩爱</router-link></li>
        <li><router-link to="/dynamic"><img src="./assets/dynamic.png" alt=""><br>动态</router-link></li>
        <li><router-link to="/sweetWords"><img src="./assets/sweetWord.jpg" alt=""><br>蜜语</router-link></li>
        <li><router-link to="/found"><img src="./assets/found.jpg" alt=""><br>发现</router-link></li>
        <li><router-link to="/me"><img src="./assets/me.jpg" alt=""><br>我</router-link></li>
         <router-view></router-view>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
$width:100%;
.footer {
    height:2%;
    position:absolute;
    width:$width;
    bottom:0;
    z-index:1;
    margin-top:10px;
    background:white;
    ul {
      height:100%;
      li {
        width:20%;
        text-align:center;
        img {
          height:58px;
        }
      }
    }
  }
</style>
