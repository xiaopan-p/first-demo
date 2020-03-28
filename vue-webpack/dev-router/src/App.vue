<template>
  <div class="app">
    <h1>这是app组件</h1>
    <!--<router-link :to="{path:'/he'}">点我挑战he页面</router-link>-->
    <!--<router-link :to="{name:'he',params:{abc:msg}}">点我挑战he页面</router-link>-->
    <router-view></router-view>
    <router-link to="/he">点我挑战he页面</router-link>
    <!--声明式的导航-->
    <!--<button @click="$router.push('/he')">跳转到he页面</button>-->
    <!--<button @click="$router.push({path:'/he',query:{abc:msg},params:{ab:msg}})">跳转到he页面</button>-->

    <!--编程式导航-->
  </div>
</template>
<!--
  传参
  path ---》 query
  name ---》 params
  区别：
  通过query传参 参数会出现地址栏    刷新页面数据不会丢失
  通过params传参 参数不会出现地址栏  刷新页面数据会丢失
-->

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:'app页面的数据123'
    }
  },
  methods:{
    fn(){
      this.$router.push('/he')
      console.log(123)
    }
  },

}
</script>

<style>
.app {
  width: 100vw;
  height: 100vh;
  background:firebrick;
}
  h1{
    color: white;
  }
</style>
