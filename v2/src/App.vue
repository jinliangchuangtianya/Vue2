<template>
  <div id="app">
     <h1>{{ message }}</h1>
    <Users></Users>
    <HelloWorld></HelloWorld>
    <commons></commons>
  </div>
</template>

<script>

//局部注册组件
import Users from "./components/Users"
import HelloWorld from "./components/HelloWorld"

export default {
  name: 'app',
  data(){
    return {
      message : "这是我的第一个 Vue脚手架项目"
    }
  },
  components : {
    Users,
    HelloWorld
  }
}
</script>

<style scoped>
h1{
  color: purple;
}
</style>
