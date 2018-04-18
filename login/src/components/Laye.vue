<template>
    <div class="laye">
      <header>{{title}}</header>
      <div class="content">
        <slot name="content">
          <p>内容</p>
        </slot>
      </div>
      <footer>
        <slot name="footer">
          <span @click="change">底部</span>
        </slot>
      </footer>
    </div>
</template>

<script>
    export default {
      name: "laye",
      props : {
          title : {
            type : String,
          }
      },
      methods :{
        change(){
          this.$emit('fn', 'phone')
        }
      }
    }
</script>

<style scoped>
.laye{
  background: white;
  width: 500px;
  height: auto;
  float: right;
  margin: 50px 50px 0 0;
}
</style>
