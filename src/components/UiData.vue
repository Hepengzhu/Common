<template>
  <div id="UiData">
    <h2 style="margin-bottom: 30px;">作业6:设计element UI组件的数据配置</h2>
    <div class="input">
      A:<input type="text" class="data-input" v-model="A" /> B:<input type="text" class="data-input" v-model="B"/>
      C:<input type="text" class="data-input" v-model="C" /> D:<input type="text" class="data-input" v-model="D"/> E:<input type="text" class="data-input" v-model="E" />
    </div>
    <!-- /* 数据展示部分 条形 */ -->
    <div class="progress">
      条形表示<br /><br />
      <p><strong class="tit">A:</strong><el-progress :text-inside="true" :stroke-width="15" :percentage="A"></el-progress></p>
      <p><strong class="tit">B:</strong><el-progress :text-inside="true" color="SpringGreen" :stroke-width="15" :percentage="B"></el-progress> </p>
      <p><strong class="tit">C:</strong><el-progress :text-inside="true" color="Aqua" :stroke-width="15" :percentage="C"></el-progress></p>
      <p><strong class="tit">D:</strong><el-progress  :text-inside="true" color="DeepSkyBlue" :stroke-width="15" :percentage="D"></el-progress></p>
      <p><strong class="tit">E:</strong><el-progress :text-inside="true" color="green" :stroke-width="15" :percentage="E"></el-progress></p>
    </div>
    <!--     /* 圆形 */ -->
    <div class="cri">
      圆形表示：
      <el-progress type="circle" :percentage="A"></el-progress>
      <el-progress type="circle" :percentage="B" color="SpringGreen"></el-progress>
      <el-progress type="circle" :percentage="C" color="Aqua" ></el-progress>
      <el-progress type="circle" :percentage="D" color="DeepSkyBlue"  class="bot"></el-progress>
      <el-progress type="circle" :percentage="E" color="LimeGreen" class="bot"></el-progress>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiData",
  // props: ['A','B','C','D','E'],
  data() {
    return {
      A: 70,
      B: 45,
      C: 60,
      D: 20,
      E: 100,
    };
  },
};
</script>
<style scoped>
#UiData {
  width: 500px;
  margin: 100px auto;
  position: relative;
  left: 40px;
}
/* 输入数据部分 */
.input {
  position: relative;
  left: -55px;
  width: 600px;
  margin-right: 10px;
}
/* 数据展示部分 条形 */
.progress {
  position: relative;
  width: 400px;
  margin: 0 auto;
}
/* 圆形 */
.cri {
  position: relative;
  margin-top: 100px;
  left: -10px;
}
.bot{
  margin-top: 20px;
  margin-left: 60px;
}
.data-input {
  height: 20px;
  /* width: 50px; */
  margin-bottom: 30px;
  font-size: 18px;
}

p {
  margin-bottom: 10px;
  position: relative;
}
.tit {
  position: absolute;
  left: -18px;
}
</style>