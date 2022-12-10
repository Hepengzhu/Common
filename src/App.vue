<template>
  <!-- 默认加载路径为 / 的组件 -->
  <div id="app">
    <!-- <Hi></Hi> -->
    <img src="./assets/logo.png"> 
    <router-view/>
    <!-- <UiData></UiData> -->
    <!-- <Elementui></Elementui> -->
    <!-- <div id="app1"></div> -->
    <!-- <div id="hi"></div> -->
    <!-- <li><router-link to="/mycp1">点我去作业</router-link></li> -->
    <!-- <Mycp1></Mycp1> -->
  </div>
</template>


<script>
import Elementui from "@/components/Element-ui.vue";
import UiData from "@/components/UiData"
import Hi from "@/components/Hi.vue"
export default {
  name: "App",
  components: {
    Elementui,
    UiData,
    Hi
  },
  data () {
    return {
      A:'',
      B:'',
      C:'',
      D:'',
      E:''
    }
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
