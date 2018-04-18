<template>
    <div>
      我是Miaov组件
      <p>{{$store.state.count}}</p>
      <button @click="changeCount">改变状态</button>
    </div>
</template>

<script>
    export default {
        name: "maiov",
        methods : {
          changeCount(){
            this.$store.commit('updataCount', { add : 15 });
          }
        }
    }
</script>

<style scoped>

</style>
