<template>
  <div>
    <div id="app">
      <div class= 'footer'>
        <ul>
          <li><router-link to="/xiaoenai">小恩爱</router-link></li>
          <li><router-link to="/dynamic">动态</router-link></li>
          <li><router-link to="/sweetWords">蜜语</router-link></li>
          <li><router-link to="/found">发现</router-link></li>
          <li><router-link to="/me">我</router-link></li>
        </ul>
      </div>
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
#app {
  background:red;
 
}
</style>
