<template>
  <div>
    <div class="block">
    <el-carousel  height="80vh">
      <el-carousel-item  v-for="item in items" :key="item">
        <img :src="item.image">
      </el-carousel-item>
    </el-carousel>
    </div>
    <div class="login">
        <span >账号</span>
        <el-input   placeholder="请输入账号" v-model="input"></el-input>
        <span >密码</span>
        <el-input   placeholder="请输入密码" v-model="input1"></el-input>
        <el-button >登录</el-button>
    </div>
  </div>
</template>

<style scoped>
  div.login{
    position: relative;
    top: -50vh;
    margin: 0 auto;
    width: 400px;
    z-index: 100;
  }
 
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  /* span.one1{
    position:absolute;
    left:0px;
    top:0px;
    margin-top:16vh;
    margin-left: 60vh;
    z-index: 100; 
  }
  span.two1{
    position:absolute;
    left:0px;
    top:0px;
    margin-top:21vh;
    margin-left: 60vh;
    z-index: 100; 
  } */
  .el-carousel el-carousel-item{
   position:absolute;
    left:0px;
    top:0px;
    z-index: -1;
  }
  /* .el-button {
    position:absolute;
    left:0px;
    top:0px;
    margin-top:25vh;
    margin-left: 80vh;
    z-index: 100; 
  }

  .el-input.one {
    position:absolute;
    left:0px;
    top:0px;
    margin-top: 15vh;
    margin-left: 65vh;
    z-index: 100; 
    width: 30vh;
  }
  .el-input.two {
    position:absolute;
    left:0px;
    top:0px;
    margin-top:20vh;
    margin-left: 65vh;
    z-index: 100; 
    width: 30vh;
  } */
  .el-carousel__item img{
    position:absolute;
    left:0px;
    top:0px;
    z-index: -1;

  }
  
  

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>


<script>

export default {
    data(){
        return{
            show:false,
            items: [
            // {image: require('../assets/1.jpg')},
            // {image: require('../assets/4.jpg')},
            // {image: require('../assets/5.jpg')},
            // {image: require('../assets/2.jpg')},
            // {image: require('../assets/3.jpg')}
            ],
            input:'',
            input1:''
        }
    }
}
</script>