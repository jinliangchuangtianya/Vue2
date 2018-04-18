<template>
    <header>
      <h1>{{ title }}</h1>
      <h1 @click="changeTitle">{{ hmess }}</h1>
      <button @click="changeParentTitle">改变父组件的title</button>
    </header>
</template>

<script>
    export default {
        name: "app-header",
        props : {
          message : {
            type : String
          }
        },
        data(){
          return{
            title : 'Vue.js Demo',
            hmess : this.message
          }
        },
        methods: {
          changeTitle(){
            this.hmess = "改变了传递的值";
          },
          changeParentTitle(){
            this.$emit("changeParentTitle", "子向父组件传值");  //参数：监听的事件名, 传递的值
          }
        }
    }
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
