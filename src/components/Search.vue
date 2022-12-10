
<template>
  <div id="Search">
    <h2 class="ser">{{ message }}</h2>  
    <div class="SearchBox">
      <div class="shadow"></div>
      <input type="text" placeholder="search anything what you want" />
      <!-- 字体图标 -->
      <span class="font"></span>
      <!-- 搜索图标 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      message: "作业4--自定义动态搜索框组件",
    };
  },
};
</script>

<style>
    
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: consolas;
  }
  
  body {
    position: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #cfd1e1;
    /* overflow: hidden; */
  }
  
  .ser {
    margin: 20px auto;
    position: relative;
    top: 10px;
    text-align: center;
  }
  
  .SearchBox {
    position: relative;
    top: -150px;
    margin: 200px auto;
    display: flex;
    width: 70px;
    height: 65px;
    justify-content: center;
    align-items: center;
    transition: .8s;
  }
  
  .SearchBox:hover{
    width: 500px;
  }
  
  .SearchBox::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0px;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff,#fff,#e3e3e3);
    z-index: 1;
    filter: blur(1px);
  }
  
  .SearchBox::after{
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    z-index: 1;
    filter: blur(1px);
  }
  
  .shadow {
    position: absolute;
    top: 0px;
    left: -53px;
    width: calc(100% + 50px);
    height: 300px;
    background: linear-gradient(180deg,rgba(0,0,0,0.1),
    transparent,transparent);
    transform-origin: top;
    transform: skew(45deg);
    pointer-events: none;
  }
  .shadow::before{
    content: '';
    position: absolute;
    left: 0%;
    width: 50px;
    height: 50px;
    background-color: #cfd1e1;
    z-index: 1;
  }
  
  .SearchBox input {
    display: block;
    /* display: none; */
    position: relative;
    /* text-align: center; */
    /* line-height: 30px; */
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px 25px;
    outline: none;
    font-size: 1.3em;
    color: #555;
    /* 渐变色 */
    background: linear-gradient(#dbdae1, #a3aaba);
    /* 水平  垂直 模糊距离(虚实程度) 阴影尺寸 颜色 */
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1),
      15px 15px 15px rgba(0, 0, 1402, 0.1),
      20px 20px 20px rgba(0, 0, 0, 0.1),
      30px 30px 15px rgba(0, 0, 0, 0.1),
      /* 可选。将外部阴影 (outset) 改为内部阴影。（内部阴影） */
      inset 1px 4px 2px#fff;

  }

  .font{
    position: absolute;
    font-family: 'icomoon';
    right: 20px;
    font-size: 30px;
    color: #555;
    /* content: ""; */
    /* content: "hhhhh"; */
    /* color: red; */
    z-index: 2;
    cursor: pointer;
  }


  .SearchBox input::placeholder{
    /* display: block; */
    color: transparent;
    transition: .8s;
  }
  .SearchBox input{
    color: transparent;
    transition: .8s;
  }
  
  .SearchBox:hover input::placeholder{
    color: #555;
  }
  .SearchBox:hover input{
    color: #555;
  }
</style>
