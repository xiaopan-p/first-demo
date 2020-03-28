<template>
  <div :class="['el-button',`el-button__${type}`,{round:Object.keys(this.$attrs).indexOf('round') >-1}]" @click="fn">
    {{msg}}
    <span v-if="Object.keys(this.$attrs).indexOf('round') >-1">{{this.$attrs.text}}</span>
    <slot v-else></slot>

  </div>
</template>

<script>
    export default {
        name: "el-button",
        data(){
            return{
                msg:"我是elbutton"
            }
        },
      props:[],
      methods:{
          fn(){
            console.log(this.$attrs)
            this.$emit('click')
          }
      }
    }
</script>

<style scoped>
  .el-button{
    width: 100px;
    height: 100px;
    background:red;
  }
  .round{
    border-radius: 50%;
  }
  /*attrs 是 [除了id class之外而且有没有在props里的属性]*/
</style>
