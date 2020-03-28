<template>
 <div class="app">
   <h1 @click="fn">我是he页面</h1>
   <mark>{{$route.params.abc}}</mark>
   <router-link to="/he/a">点我跳转/he/a页面</router-link>
   <router-link to="/">点我跳转/页面</router-link>
   <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    fn(){
      console.log(this.$router)
      console.log(this.$route)
    }
  },
  beforeCreate() {
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app{
  background: aqua;
  color: white;
}

</style>
