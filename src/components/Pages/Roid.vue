<template>
  <div>   
    <el-radio-group  v-model="radio1" @change="domfligth(radio1)" >
      <el-radio-button label="国内机票" ></el-radio-button>
      <el-radio-button label="国际机票" ></el-radio-button>
      <el-radio-button label="火车票"></el-radio-button>
      <el-radio-button label="国内酒店"></el-radio-button>      
      <el-radio-button label="国际酒店"></el-radio-button>
    </el-radio-group>
  <p>
    <domflight v-bind:form='form'></domflight>
  </p>
  </div>
</template>

<script>
import Domflight from './Domflight.vue';
// import Intflight from './Productiondata/Intflight.vue';
  export default {
    data () {
      return {
        radio1: '国内机票',
        form: {
          name: '国内机票',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '单程',
          desc: ''
        }
      };
    },methods:{
        domfligth(a){
          console.log("我点击了",a)
          this.form.name = a
          this.form.desc = "我是父组件传参的"+a
          console.log("form.name",this.form.name)
          // switch (a) {
          //   case '国内机票':
          //     this.$router.push({path:'/domflight'});
          //     break;
          //   case '国际机票':
          //     this.$router.push({path:'/intflight'});
          //     break;
          //   case '火车票':
          //     console.log("我点击了火车票",a)
          //     this.$router.push({path:'/domflight'});
          //     break;
          //   case '国内酒店':
          //     this.$router.push({path:'/domflight'});
          //     break;
          //   case '国际酒店':  
          //     this.$router.push({path:'/domflight'});
          //     break;
          //   default:
          //     this.$router.push({path:'/domflight'});
          // }
          

        }
    },components:{
        'domflight':Domflight
        // Intflight
    }
  }
</script>