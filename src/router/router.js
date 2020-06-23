import Vue from 'vue'; //引入vue
import VueRouter from 'vue-router';  //引入vue-router
import roid from '../components/Pages/Roid.vue';
import car from '../components/Pages/Caroule.vue';
import buildlist from '../components/Pages/Buildlist.vue';




Vue.use(VueRouter);  //明确安装路由功能

const routes=  //定义路由
[
    
    {
        path:'/roid',
        component:roid,
        beforeEnter:(to,from,next)=>{
            console.log('我进入了params模板');
            next();}
    },
    {
        path:'/car',
        component:car
    },
    {
        path:'*',
        redirect:'/roid'
    },
    {
        path:'/buildlist',
        component:buildlist
    }
]

const router=new VueRouter({  //创建路由实例，然后传入配置routes
    mode:'history',
    routes
	
	
})

export default router;   //暴露路由
