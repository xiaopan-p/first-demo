<template>

  <div id="app">
    <h1 @click="fn()">{{msg}}</h1>
    <elButton round text="text" @click="bar">slot内容</elButton>
  </div>
</template>
<script>
  import elButton from "./components/el-button.vue"

  export default {
    data(){
      return{
        msg:"我是组件"
      }
    },
    methods:{
      fn(){
        console.log(123)
      },
      bar(){
        console.log(12344444)
      }
    },
    computed:{

    },
    components:{
      elButton
    }
  }
</script>
<style></style>
