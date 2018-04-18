<template>
  <div id="app">
    <Header v-on:changeParentTitle="changeParentTitle($event)" :message="message"></Header>
    <Users :users="users"></Users>
    <Users :users="users"></Users>
    <Footer :message="message"></Footer>
  </div>
</template>

<script>


  /*
  生命周期钩子函数
    beforeCreate : 没有创建Vue实例之前调用的方法, 一般用于加载动画
    created : 组件已经创建好, data数据已经绑定完成, DOM还没有生成的时候调用的方法, 一般用于通过网络接口请求数据,然后赋值给属性, 结束beforeCreate的加载动画
    beforeMount : 组件挂载之前,虚拟DOM已经配置 页面显示之前调用的方法
    mounted : 组件挂载完成之后, 此方法执行后, 页面显示
    beforeUpdate : 组件发生更新之前, 调用的方法
    updated : 组件更新, 此方法执行后, 页面更新

    组件实例生命周期的尾部

    beforeDestroy : 组件实例销毁之前, 调用的方法
    destroyed : 组件销毁之后, 调用的方法

    >>实例Demo在Header组件内
*/

  import Header from './components/Header';
  import Users from './components/Users';
  import Footer from './components/Footer';

  export default {
    name: 'app',
    data(){
      return{
        users : [
          {name : '张三', position : 'web开发', show : false},
          {name : '李四', position : 'app开发', show : false},
          {name : '王五', position : 'java开发', show : false},
          {name : '赵六', position : 'php开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false}
        ],
        message : "传递的是一个值, (Number String Boolean)"
      }
    },
    components : {
      Users,
      Header,
      Footer
    },
    methods :{
      changeParentTitle(title){
        this.message = title;
      }
    }
  }
</script>

<style>

</style>
