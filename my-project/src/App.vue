<template>
  <div id="app">
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/about">生命周期组件</router-link>
    </p>
    <div>
      <router-view></router-view>
    </div>
    <!-- <tips></tips> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import tips from './components/tips.vue'

export default {
  name: 'App',
  // components: {
  //   tips
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
