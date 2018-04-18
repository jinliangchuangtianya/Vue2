<template>
  <div class="home">
    <Header v-on:changeParentTitle="changeParentTitle($event)" :message="message"></Header>
    <Users :users="users"></Users>
    <Users :users="users"></Users>
    <Footer :message="message"></Footer>
  </div>
</template>

<script>

  import Header from './Header';
  import Users from './Users';
  import Footer from './Footer';

  export default {
    name: 'home',
    data(){
      return{
        users : [
          /*{name : '张三', position : 'web开发', show : false},
          {name : '李四', position : 'app开发', show : false},
          {name : '王五', position : 'java开发', show : false},
          {name : '赵六', position : 'php开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false},
          {name : '韩七', position : 'python开发', show : false}*/
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
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/users')      //请求远程数据
        .then((data) => {
          console.log(data.body);
          this.users = [...data.body];
        })
    }
  }
</script>

<style>

</style>
