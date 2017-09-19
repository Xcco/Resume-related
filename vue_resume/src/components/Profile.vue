<template>
<div class="profile">
  <h2 class="title">{{label[1]}}</h2>
  <el-form class="form">
    <el-form-item :label="label[i+1]" v-for="i in label[0]">
      <el-input v-model="profile[i-1]" :placeholder="`请输入${label[i+1]}`"></el-input>
    </el-form-item>
    <el-form-item label="个人简介" v-if="label[1]=='个人信息'">
    <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="profile[4]">
    </el-input>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['label', 'profile'],
}
</script>
<style lang="scss">
  .profile {
    border: 1px solid #9a7c5e;
    h2 {
      margin-top: 15px;
      font-size: 30px;
      color: #fafafa;
      padding: 25px 20px;
      background-color: #9a7c5e;
    }
    .form {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
</style>
<label class="label">用户名：</label>
  <el-input class="input" placeholder="请输入账号"></el-input>
<label class="label">用户名：</label>
  <el-input class="input" type="password" placeholder="请输入密码"></el-input>
