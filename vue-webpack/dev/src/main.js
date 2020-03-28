// const Vue = require('vue')
import Vue from 'vue';
import test from './test.vue';
import elButton from './components/el-button.vue'
/*Vue.component('abc',{
  template:'<div>{{a}}</div>',
  data:function(){
    return{
      a:2
    }
  }
})*/
//一个组件应该包含自己的所有需要的东西【结构 行为 样式】
//vue文件去表达一个独立的文件
//beforeCreate
let app = new Vue({
  el:'#app1',//自动挂载
  data:{
    msg:'hello world'
  },
  beforeCreate:function(){
    console.log('beforeCreate',this.msg)
  },
  created:function(){
    console.log('created',this.msg)
  /* if (this.msg == 'hello world') {
     console.log(123)
    }else{
     console.log(50000)
   }*/
  },
  components:{
    test:test
  },
  template:`<h1>hi123</h1>`

});
// app.$mount('#app');//手动挂载
//局部组件 .vue 必须要先注册
//全局组件 vue.complate（）直接使用不用注册
