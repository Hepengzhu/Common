<template>
    <div id="mycp1">
        <h3>{{message}}</h3><br><br>
       <input v-model="value" ><span>px</span><br><br>
       <p v-size="value">看看我的大小</p>
    </div>
</template>
<script>
export default {
  name: 'mycp1',
  data () {
    return {
      message: '作业3-自定义指令：接收指定字体大小',
      value:'16'
    }
  },
  // 自定义指令
  directives:{
    size:{
      bind(el,binding){
        el.style.fontSize=Number(binding.value)+'px' 
      },
      update(el,binding){
        el.style.fontSize=Number(binding.value)+'px'
      }
    }
  }
}
</script>

<style>
    #mycp1 h1{
        display:block;
        width: 300px;
        margin: 100px auto;
        font-size: 40px;
        font-weight: 900;
    }
    input{
      width: 80px;
      font-size: 24px;
      background-color: #cfd1e1;
    }
    input+span{
        font-size: 30px;
    }
</style>