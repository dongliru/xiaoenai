<template>
  <div id="app" class= "container">
    <div class = 'title'>
    我们已相爱<br>
    <b>1230</b>天
    </div>
    <div class = 'content'>
      <div class='image'>照片</div>
      <div class='loveHead'>情侣头像</div>
      <div class='application'>
        <ul>
          <li>相册</li>
          <li>日记本</li>
          <li>纪念日</li>
          <li>启动睡眠</li>
          <li>小姨妈</li>
        </ul>
      </div>
    </div>
    <div class= 'footer'>
      <ul>
        <li><router-link to="/">小恩爱</router-link></li>
        <li><router-link to="/dynamic">动态</router-link></li>
        <li><router-link to="/sweetWords">蜜语</router-link></li>
        <li><router-link to="/found">发现</router-link></li>
        <li><router-link to="/me">我</router-link></li>
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
div,ul,li,h1,h2,h3,h4,h5,h6,p {
  margin:0;
  padding:0;
}
html,body {
  height:100%;
}
#app.container {
   margin-left:30px;
   width:800px;
   margin:0 auto;
   background:-webkit-linear-gradient(left,hotpink,lightblue,skyblue);
  .title {
    color:white;
    b {
      font-size:20px;
    }
  }

 
}
</style>
