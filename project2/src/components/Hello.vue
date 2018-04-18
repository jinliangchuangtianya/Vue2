<template>
    <div>
      <div  v-for="item,i in shopList">
        <button @click="changDown(item.id)">-</button>
        <span>{{item.count}}</span>
        <button @click="changUp(item.id)">+</button>
      </div>

    </div>
</template>
<script>
  export default{
    name : "hello",
    computed : {
      shopList(){
        return this.$store.state.shopList;
      }
    },
    methods : {
      changDown(id){
        /*没有异步操作,直接提交mutations*/
        //this.$store.commit('updataCount', { id, type : 'down'})
        /*处理一步操作,派发actions*/
        this.$store.dispatch('yibuFn', { id, type : 'down'})
      },
      changUp(id){
        /*没有异步操作,直接提交mutations*/
        //this.$store.commit('updataCount', {id, type : 'up'})
        /*处理一步操作,派发actions*/
        this.$store.dispatch('yibuFn', { id, type : 'up'})
      }
    }
  }
</script>


