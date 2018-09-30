import Vue from 'vue';
//组件
import App from './components/App.vue';
import Login from './components/Login.vue'


//vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

var router=new VueRouter({
    routes:[
        {name:'Login',path:'/login',component:Login}
    ]
})

new Vue({
    el:'#app',
    //render函数的作用是把组件渲染到页面中去
    // render:function(h){
    //     return h(APP);
    // }
    router,
    render:h=>h(App)
    
})