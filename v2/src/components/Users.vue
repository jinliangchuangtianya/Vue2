<template>
    <div class="users">
      <h1>Hello Users</h1>
      <ul>
        <li v-for=" user in users ">{{ user }}</li>
      </ul>
    </div>
</template>

<script>
    export default {
      name: "users",
      data(){
          return{
            users : [
              "李磊",
              "韩梅梅",
              "凯文"
            ]
          }
      }
    }
</script>

<style scoped>
h1{
  color: green;
}
</style>
