<template>
  <div id="app">
    <Hello></Hello>
    <miaov></miaov>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import Miaov from './components/Maiov'
  export default {
    name: 'App',
    components : {
      Hello,
      Miaov
    }
  }
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
