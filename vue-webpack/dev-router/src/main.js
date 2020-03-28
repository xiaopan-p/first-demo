// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router'
//如果导入语法只导入一个文件夹 那么自动导入当前这个文件夹下的index.js


Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({router:router.router}).$mount('#app');
/*
* 通过注入路由器，我们可以在任何组件内通过this.$router访问路由器，也可以通过this.route访问当前路由
* 如果你想要加入一些自己的数据可以通过meta：{}来传递
* */
