<template>
  <footer>
    <p>{{ cptyright }}</p>
    <p>{{ message }}</p>
  </footer>
</template>

<script>
    export default {
        name: "app-footer",
        props : {
          message : {
            type : String
          }
        },
        data(){
          return{
            cptyright : 'Copyright 2017 Vue Demo'
          }
        }
    }
</script>

<style scoped>
  footer{
    background: #222;
    padding: 5px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
