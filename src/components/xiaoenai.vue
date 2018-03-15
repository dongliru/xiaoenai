<template>
  <div id="app" class= "container">
    <div class = 'title'>
    我们已相爱<br>
    <b>1230</b>天
    </div>
    <div class = 'content clearfix'>
      <div class='loveHead'>
        <div class="loveHead-left">
          <img src='../assets/头像1.jpg'>
          <p>你瑞</p>
        </div>
        <div class="loveHead-right">
          <img src='../assets/头像2.jpg'>
          <p>不美不萌不温柔</p>
        </div>
      </div>
      <div class='application'>
        <ul class='clearfix'>
          <li><router-link to="xiaoenai/album"><b>309</b><br>相册</router-link></li>
          <li><router-link to="xiaoenai/diary"><b>99</b><br>日记本</router-link></li>
          <li><router-link to="xiaoenai/anniversary"><b>5</b><br>纪念日</router-link></li>
          <li><router-link to="xiaoenai/startSleep"><b><img src='../assets/1.png'></b><br>启动睡眠</router-link></li>
          <li><router-link to="xiaoenai/aunts"><b><img src='../assets/2.png'></b><br>小姨妈</router-link></li>
        </ul>
      </div>
    </div>

    <div class= 'footer'>
      <ul class="clearfix">
        <li><router-link to="/"><img src="../assets/xiaoenai.png" alt=""><br>小恩爱</router-link></li>
        <li><router-link to="/dynamic"><img src="../assets/dynamic.png" alt=""><br>动态</router-link></li>
        <li><router-link to="/sweetWords"><img src="../assets/sweetWord.jpg" alt=""><br>蜜语</router-link></li>
        <li><router-link to="/found"><img src="../assets/found.jpg" alt=""><br>发现</router-link></li>
        <li><router-link to="/me"><img src="../assets/me.jpg" alt=""><br>我</router-link></li>
         <router-view></router-view>
      </ul>
    </div>
  </div>
</template>
<script>

export default
 {
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
$height:400px;
$imgWidth: calc(100% - 40px);
#app.container {
  position:relative;
  height:100%;
  width:$width;
  margin:0 auto;
  background:-webkit-linear-gradient(left,hotpink,lightblue,skyblue);
.title {
  color:white;
  margin-left:30px;
//   height:10%;
  b {
    font-size:20px;
  }
  }
  .content {
    margin-bottom:20px;
    padding-bottom:5px;
    height:80%;
    .loveHead {
    text-align:center;
    position:relative;
    border-bottom:1px solid #ccc;
    border-radius:5px 5px 0 0;
    margin:0 auto;
    width:$imgWidth;
    height:$height;
    background-image:url("../assets/psb (5).jpg") ;
    background-size:$imgWidth $height;
    .loveHead-left {
    position:absolute;
    bottom:10px;
    left:20px;
    img {
        width:70px;
        height:70px;
    } 
      }
    .loveHead-right {
    position:absolute;
    bottom:10px;
    right:20px;
    img {
        width:70px;
        height:70px;
    }
    }
    }
    .application {
        padding-bottom:10px;
        height:calc(100% - $height);
        background:#F4e1Ad;
        width:$imgWidth;
        margin:0 auto;
        border-radius:0 0 5px 5px;
      ul {
        li {
          float:left;
          list-style:none;
          width:20%;
          text-align:center;
          a {
            color:#5E55ac;
            text-decoration:none;
            b {
              display:block;
              margin:0 auto;
              line-height:40px;
              width:40px;
              height:40px;
            }
          }
        }
      }
    }
  }
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
}
</style>
