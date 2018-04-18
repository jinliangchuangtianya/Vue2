<template>
    <div>
      <x-header>
        <div>我的首页</div>
      </x-header>
    </div>
</template>

<script>
  import { XHeader } from 'vux'
  import AppHeader from "../../../login/src/components/Header";
    export default {
        name: "header",
        components : {
          AppHeader,
          XHeader
        }
    }
</script>

<style scoped>

</style>
