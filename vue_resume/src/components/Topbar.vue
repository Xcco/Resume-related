<template>
  <div id="topbar">
    <div class="logo">
      定制你的个人简历
    </div>
    <div class="actions">
      <ElButton @click="signUpto" v-if="!logined">注册</ElButton>
      <el-button @click="signInto" v-if="!logined">登录</el-button>
      <span class="welcome"v-if="logined">欢迎，{{logined}}</span>
      <el-button @click="preview">预览</el-button>
    </div>
  </div>
</template>

<style lang="scss">
  #topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    font-size: 20px;
  }
</style>

<script>
  export default {
    methods:{
      preview(){
        this.$emit('preview')
      },
      signUpto(){
        this.$emit('signUpto')
      },
      signInto(){
        this.$emit('signInto')
      }
    },
    props:['logined']
  }
</script>
<style lang="scss">
  .topbar {
    vertical-align: bottom;
  }
  .logo{
    font-family:'YouYuand3eb935f61a5b4';
    font-size: 28px;
    color: #9a7c5e;
    margin-left: 20px;
  }
  .welcome{
    color: #4c3a30;
    padding-top:20px;
    margin-right: 20px;
    vertical-align: baseline;
    font-size: 16px;
  }
</style>
