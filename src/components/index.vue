<template>
  <div id="index">
    <!-- <div id="Search"></div> -->
    <Search></Search>
    <div class="five">
      <h2>作业5-用路由实现Vue-Cli项目的界面跳转</h2>
      <el-button type="info" round size="medium" class="bt"><router-link to="/mycp1">点我去作业3</router-link></el-button>
    </div>
    <!-- <div id="app1"></div> -->
    <UiData></UiData>
  </div>
</template>

<script>
import Search from "@/components/Search"
import UiData from "@/components/UiData"
export default {
  name: "index",
  components: {
    UiData,
    Search
  }
};
</script>

<style>
.five {
  position: relative;
  top: -200px;
}

.bt{
  margin: 20px;
}

a {
  text-decoration: none;
  color: black;
}
</style>