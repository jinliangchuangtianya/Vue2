<template>
    <div>
      我是hello组件
      <p>{{n}}</p>
      <p>{{m}}</p>
      <button @click="changeCount">改变状态</button>
    </div>
</template>
<script>
  export default{
    name : "hello",
    data(){
      return {
        //n只能在本组件被改变  this.n = ...
        n :   this.$store.state.count  //n的初始值从vuex的state中取
      }
    },
    computed : {
      m(){
        return this.$store.state.count;
      }
    },
    methods :{
      changeCount(){
        //改变vuex中的状态
        this.$store.commit('updataCount', { add : 10 });  //提交mutations
      }
    }
  }
</script>


