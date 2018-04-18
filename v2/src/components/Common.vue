<template>
  <div class="Common">
    {{ name }}
  </div>
</template>

<script>
    export default {
        name: "Common",
        data(){
          return{
            name : "我是全局组件"
          }
        }
    }
</script>

<style scoped>

</style>
