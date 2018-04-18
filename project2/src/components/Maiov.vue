<template>
    <div>
      <hr>
      <h4>总数</h4>
      <p>{{num}}</p>
     <!-- <h1>{{$store.state.a.count}}</h1>-->
    </div>
</template>

<script>
    export default {
        name: "maiov",
        computed : {
          m(){
            let num = 0;
            this.$store.state.shopList.forEach(item =>{
              num += item.count;
            })
            return num;
          },
          num(){
            return this.$store.getters.totals;
          }
        }
    }
</script>

<style scoped>

</style>
