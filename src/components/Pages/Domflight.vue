<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="航班类型" v-if="form.name== '国内机票' || form.name== '国际机票'">
    <el-radio-group v-model="form.resource">
      <el-radio label="单程"></el-radio>
      <el-radio label="往返"></el-radio>
    </el-radio-group>
  </el-form-item>
  <!-- <el-form-item label="活动名称" v-if="form.name=='国内酒店'">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item> -->
  <el-form-item label="下单日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 80%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 80%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <!-- <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
  </el-form-item>
</el-form>
</template>

<script>
// import Vue from 'vue';

  export default {
    data() {
      return {
        // form: {
        //   name: '',
        //   region: '',
        //   date1: '',
        //   date2: '',
        //   delivery: false,
        //   type: [],
        //   resource: '',
        //   desc: ''
        // }
      }
    },
    methods: {
      onSubmit() {
        if(this.form.name == '国内机票'){
          // this.token =localStorage.token
          this.axios.post('/front/v1/flight/placeOrder',{"passengers":[{"passengerName":"李蕊蕊","wasEmployee":true,"passengerType":"Adult","nameSwitch":true,"docType":"IdCard","docNo":"513436200004207429","gender":"Female","approvalNo":"","projectId":null,"belongedDeptId":"86471155053105152","mobile":"13466666666","aeroplanCard":null,"employeeId":"115410340384215040","birthday":"2000-04-20","lowPriceReasonCode":"","lowPriceReasonText":"","preDaysReasonCode":"","preDaysReasonText":"","passengerInsurances":[{"insuranceProductCode":"tpccye","insuranceCount":1,"unitPrice":0}]}],"customizeData":"","contact":{"name":"郑汶沛","mobile":"13005409339","email":"zhengwenpei@tehang.com","dynamicRequired":false},"requireDistribution":false,"distribution":null,"routes":[{"segments":[{"flightsId":"3f03b8a4-604d-4f00-9072-e8132b5250fa","flightId":"b4efa184-86eb-43bd-8b80-20438379cd76","bunkId":"af92cc60-9672-40d2-8b83-03657fe163c6"}]}],"travelType":"OnBusiness","operateSource":"Web"},
          )
          .then((response)=> {
              console.log("返回数据:",response);
              // alert(response.data.message)
              this.$message({
                message: response.data.message,
                center: true
              });
            })
            .catch((error) =>{
              this.$message({
                message: error,
                center: true
              });
            }); }
        else
          // alert(this.form.name)
          null
      
      }
    },props:["form"]
  }
</script>