<template>

  <nav class="navbar navbar-default">
    <div class="container-full">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="../assets/kd-logo.png" alt="">
        </a>
      </div>
      <div class="visible-xs">
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="#">解决方案</a></li>
            <li><a href="#">产品服务</a></li>
            <li><a href="#">为什么选择客聚宝</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>

    </div><!-- /.container-fluid -->
  </nav>

</template>

<script>

    export default {
        name: "app-header"
    }
</script>

<style scoped>
  .navbar-brand{
    height: auto;
  }
  .navbar{
    margin-bottom: 0;
    height: 84px;
  }
  .navbar-default .navbar-nav>li>a {
    color: #777;
    background: white;
    border-top: 1px solid #ccc;
  }
</style>
