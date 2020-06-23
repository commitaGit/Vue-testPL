import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/router.js';
import axios from 'axios'



// Vue.prototype.axios = axios
Vue.config.productionTip = true
Vue.use(ElementUI);
axios.defaults.headers.common["authorization"] = localStorage.token
axios.defaults.headers.post["Content-type"] = "application/json"
axios.defaults.baseURL = 'https://test-customer-api-gateway-env-1.teyixing.com'
//在任意组件中使用，$http调用axios
Vue.prototype.$http = axios;
 //在其他地方使用只需使用 this.$http来代替axios;
 //配置baseUrl

new Vue({
  router,  //创建和挂载根实例，通过router注入路由，从而整个应用有路由功能
  render: h => h(App),
}).$mount('#app')

