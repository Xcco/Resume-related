<template>
<div class="login">
  <div class="cover">

  </div>
  <div class="center-part">
    <h2>注册</h2>
    <el-form class="form">
      <el-form-item>
        <label class="label">用户名：</label>
        <el-input v-model='data.username' class="input" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item>
        <label class="label">密码：</label>
        <el-input v-model='data.password' class="input" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item class="button">
        <el-button @click="cancel">取消</el-button>
        <el-button @click="confirm">确认</el-button>
      </el-form-item>
    </el-form>
  </div>

</div>
</template>


<script>
export default {
  methods: {
    cancel() {
      this.$emit('cancelLogin')
    },
    confirm() {
      this.$emit('confirmLogin')
    }
  },
  props: ['data']
}
</script>












<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    .cover {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: rgba(0,0,0,0.5);
        z-index: 9;
    }

    .center-part {
        position: absolute;
        background-color: #fafafa;
        border: 1px solid #9a7c5e;
        width: 320px;
        z-index: 10;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    h2 {
        text-align: center;
        margin-top: 15px;
        font-size: 30px;
        color: #fafafa;
        padding: 10px 20px;
        background-color: #9a7c5e;
    }
    .form {
        margin-left: 20px;
        .label {
            width: 60px;
            display: inline-block;
        }
        .input {
            width: 200px;
        }
        .button {
            margin: 10px 37px 15px 0;
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>
