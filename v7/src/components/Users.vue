<template>
  <div class="users">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for=" user in users ">
        <h2>{{ user.name }}</h2>
        <h3>{{ user.email }}</h3>
      </li>
    </ul>
    <button @click="deleatUser">删除</button>
  </div>
</template>

<script>
    export default {
        name: "users",
        //props:["users"],
        props : {
          users : {
            type : Array,
            required : true,
            default(){
              return  [
                {name : '张三', position : 'web开发', show : false},
                {name : '李四', position : 'app开发', show : false},
                {name : '王五', position : 'java开发', show : false}
              ]
            }
          }
        },
        data(){
          return{
            title : 'Hello Users'
          }
        },
        methods : {
          deleatUser(){
            this.users.pop();
          }
        }
    }
</script>

<style scoped>
  h1{
    color: green;
  }
  .users{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    box-sizing: border-box;
  }
</style>
