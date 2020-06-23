<template>
  <div>
    <div >
    <el-input class="left_input" slot="id" 
          v-model="search"
          size="mini"
          placeholder="输入Commit_ID搜索"/>
    <el-button type="primary" icon="el-icon-refresh" :loading="flag"  @click="reload" class="right_btn">刷新</el-button>
    </div>
    <div>
    <el-table 
    :data="tableData.filter(data => !search || data.commit_hash==search)"
    style="width: 100%"
    :default-sort = "{prop: 'id', order: 'descending'}">
    <el-table-column
      prop="id"
      label="ID"
      width="100">
    </el-table-column>
    <el-table-column
      prop="project"
      label="项目"
      width="180">
    </el-table-column>
    <el-table-column
      prop="branch"
      label="打包分支"
      width="180">
    </el-table-column>
    <el-table-column
      prop="commit_hash"
      label="Commit_ID"
      >
    </el-table-column>
    <el-table-column
      prop="Created"
      label="创建时间">
    </el-table-column>
     <el-table-column
      prop="notes"
      label="状态">
    </el-table-column>
      </el-table>
    </div>
    
  </div>
  

  
</template>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .right_btn
  {
    float:right;
  }

  .left_input{
    width: 500px;
    float: left;
  }
</style>

<script>
    export default {
    data() {
      return {
        tableData:new Array(),
        search:'',
        flag:false
      }
    },
    methods:{
      reload(){
         location.reload();
         this.flag=true
      }
    },
    mounted(){
      this.$http.get('http://20.20.20.9:8088/projects')
          .then((response)=> {
              console.log("返回数据:",response);
              this.tableData = response.data;
              this.flag=false
              // this.$message({
              //   message: response.data
              // });
            })
            .catch((error) =>{
              this.$message({
                message: error
              });
            })
        
    }
  }
</script>