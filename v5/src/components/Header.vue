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
        },
        beforeCreate(){
          alert('组件实例化之前,执行的函数');
        },
        created(){
          alert('组件实例化完毕,data数据已经绑定完成,但页面还未显示,执行的函数');
        },
        beforeMount(){
          alert('组件挂载之前,但虚拟DOM已经配置,页面仍未显示,执行的函数');
        },
        mounted(){
          alert('组件挂载完成之后, 此方法执行后, 页面显示');
        },
        beforeUpdate(){
          alert('组件更新之前,页面仍未更新,但虚拟DOM已经配置');
        },
        updated(){
          alert('组件更新,此方法执行后,页面更新');
        },
        beforeDestroy(){
          alert('组件销毁前,调用的函数');
        },
        destroyed(){
          alert('组件销毁之后,调用的函数');
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
