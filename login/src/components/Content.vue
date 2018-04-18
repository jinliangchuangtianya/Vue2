<template>
  <div class="app-content">
      <layers :title="title" v-on:fn="abc">
        <template slot="content">
          <ul>
            <li v-for="item in arr[change]" v-if="item.name != '验证'">{{item.data}}</li>
            <li v-else>
              <p>111</p>
              <input type="text">
              <p>{{item.data}}</p>
            </li>
          </ul>
        </template>
        <template slot="footer">
          <p v-if="change == 'phone'" @click="ggg">aaaaa</p>
        </template>
      </layers>
  </div>
</template>

<script>
 import layers from './Laye'
    export default {
        name: "app-content",
      data(){
          return {
            title: "标题",
            change: 'users',
            arr: {
              users: [
                {
                  name: '手机',
                  data: 'haha'
                },
                {
                  name: '验证',
                  data: 'gaga'
                },
                {
                  name: '密码',
                  data: 'hehe'
                }
              ],
              phone: [
                {
                  name: '你好',
                  data: 'aa'
                },
                {
                  name: '哈哈',
                  data: 'bb'
                },
                {
                  name: '你好',
                  data: 'aa'
                },
                {
                  name: '哈哈',
                  data: 'bb'
                },
                {
                  name: '你好',
                  data: 'aa'
                },
                {
                  name: '哈哈',
                  data: 'bb'
                },
                {
                  name: '你好',
                  data: 'aa'
                },
                {
                  name: '哈哈',
                  data: 'bb'
                },
                {
                  name: '密码',
                  data: 'hehe'
                }
              ]
            }
          }
      },
      methods:{
        abc(data){
          this.title = "切换啦";
          this.change = data;
        },
        ggg(){
          this.change = 'users';
        }
      },
      components : {
        layers
      }
    }
</script>

<style scoped>
  .app-content{
    background: url("../assets/kd-bg-01.png") top left;
    width: 100%;
    height: 600px;
  }
</style>
