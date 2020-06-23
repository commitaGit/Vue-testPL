<template>
	<div>
		<el-container style="height: 100%;min-height:100vh;" direction='vertical'  >
			<el-header >
        <div>
          <!-- <img alt="Vue logo" src="./assets/logo.png" height="30px" width="30px" > -->
          <span>大威天龙</span>
        </div>
			</el-header>
			<el-container style="height: 100%;min-height:100vh;" direction='horizontal' >
				<el-aside width='200px' >
					<Menu></Menu>
				</el-aside>
			<el-main>
				<keep-alive>
				<router-view ></router-view>
				</keep-alive>
				</el-main>
      </el-container>
		
		</el-container>
	</div>	
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu  
  },mounted(){
      this.axios.post('/front/v1/employee/login',{"identity":"13005409339","password":"a1111111","validateToken":"","validateCode":"","clientType":"Web"})
      .then( (response) =>{
        console.log("返回数据:",response);
        localStorage.token = 'Bearer '+response.data.data.token
      })
      .catch((error) =>{
        console.log('报错:',error);
        this.$message({
                message: error,
                center: true
              });
      });
  }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
