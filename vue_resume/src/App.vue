<template>
<div id="app">
  <Login :data="signUpInfo" @cancelLogin="cancelLogin" @confirmLogin="confirmLogin" class="login" v-if="signUp" />
  <Login :data="signUpInfo" @cancelLogin="cancelLogin" @confirmLogin="confirmLogin" class="login" v-if="signIn" />
  <Sidebar class="sidebar" @clickTab="changeTab" v-show="!previewMode" />
  <div class="main">
    <Topbar class="topbar" :logined="signUpInfo.username" @signUpto="signUpto" @signInto="signInto" @preview="preview" v-show="!previewMode" />
    <div class="exitPreview" v-show="previewMode">
      <el-button @click="exitPreview">退出预览</el-button>
    </div>
    <div class="content">
      <Info class="info" :info="info" :currentTab="currentTab" v-show="!previewMode" />
      <Preview class="preview" :info="info" />
    </div>
  </div>
</div>
</template>

<script>
import Login from './components/Login'
import Preview from './components/Preview'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Info from './components/Info'

//注册功能
import AV from 'leancloud-storage'

var APP_ID = 'eAQ1PLpDS3DGbvXXwz5UF6qN-gzGzoHsz';
var APP_KEY = '9LhasJIM1zAI1G5M41fxoCKf';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});




export default {
  data() {
    return {
      currentTab: 0,
      previewMode: false,
      signIn: false,
      signUp: false,
      signUpInfo: {
        username: '',
        password: ''
      },
      info: {
        diploma: [{
          time: "",
          name: "",
          content: "",
          degree: ""
        }],
        company: [{
          time: "",
          name: "",
          content: ""
        }],
        skill: [{
          name: "",
          content: ""
        }],
        project: [{
          time: "",
          name: "",
          content: ""
        }],
        personInfo: [],

        contact: []
      }
    }
  },
  methods: {
    exitPreview() {
      this.previewMode = false
    },
    preview() {
      this.previewMode = true
    },
    changeTab(i) {
      this.currentTab = i
    },
    signUpto() {
      this.signUp = true
    },
    signInto() {
      this.signIn = true
    },
    cancelLogin() {
      this.signIn = false
      this.signUp = false
    },
    confirmLogin: function() {
      let user = new AV.User();
      user.setUsername(this.signUpInfo.username);
      user.setPassword(this.signUpInfo.password);
      user.signUp().then(function(loginedUser) {
        console.log(loginedUser);
      }, function(error) {})
      this.signIn = false
      this.signUp = false
    }
  },
  components: {
    Topbar,
    Sidebar,
    Preview,
    Info,
    Login
  }
}
</script>


<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}
#app,
body,
html {
    height: 100%;
}
#app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // background-image: url('./assets/bg.png');
    // background-size: cover;
    // background-position: bottom left;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #f2f2f2;
    .login {
        position: absolute;
    }
    .sidebar {
        min-width: 200px;
        width: 220px;
    }
    .main {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        height: 100%;
        .exitPreview {
            position: absolute;
            right: 20px;
            top: 20px;
        }
        .topbar {
            background-color: #fafafa;
            box-sizing: border-box;
            margin-bottom: 20px;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.1);
        }
        .content {
            display: flex;
            justify-content: space-around;

            height: 100%;
            align-content: stretch;
            .info {
                margin-left: 20px;
                width: 342px;
                align-items: stretch;
            }
            .preview {
                max-width: 800px;
                margin-left: 20px;
                flex-grow: 1;
                border: 1px solid #ccc;
            }
        }
    }
}
</style>
