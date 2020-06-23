<template>
<el-container style="height: 100%; border: 1px solid #eee">
    <el-aside height ='500px' width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>数据生产</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1" @click='onei1'>测试环境env-1</el-menu-item>
          <el-menu-item index="1-2" @click='onei2'>选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3" @click="onei3">打包进度</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
</el-container>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    data() {
     
      return {
        
      }
    },methods:{
      onei1(){
        this.$router.push({path:'/roid'})
      },
      
      onei2:function(){
          // this.$router.push({path:'/car'})      
      },
      onei3()
      {
        
        this.$router.push({path:'/buildlist'})     
      }
      // {console.log(name)})

      
    }
      
    
  }
  
</script>