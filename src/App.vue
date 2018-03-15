<template>
  <div>
    <div>
      <router-view></router-view>
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
