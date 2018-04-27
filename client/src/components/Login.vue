<template>
  <div class="wers-login-box">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm
">
      <el-form-item label="账号" prop="username">
        <el-input type="text" name="username" v-model="ruleForm.username" auto-complete="on"></el-input>
      </el-form-item>
      <el-form-item label="密码" style="color: #fff" prop="password" @keyup.enter.native="submitForm('ruleForm')">
        <el-input type="password" v-model="ruleForm.password" auto-complete="on" name="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button size="mini" type="success" @click="resetForm('ruleForm')">重置</el-button>
        <el-button size="mini" type="danger" @click="submitForm('ruleForm')">登陆</el-button>
      </el-form-item>
    </el-form>
    <canvasbg @listen_form_show="show_login_form"></canvasbg>
    <audio id="audio" autobuffer>
      <source src="../assets/public/audio/189.wav">
      <!-- <source src="../assets/public/audio/cjml.wav"> -->
      <object type="audio/x-wav" data="../assets/public/audio/cjml.wav" width="290" height="45">
        <param name="src" value="../assets/public/audio/cjml.wav">
        <param name="autoplay" value="false">
        <param name="autoStart" value="0">
      </object>
    </audio>
  </div>
</template>
<script type="text/javascript">
import canvasbg from './Canvas_bg'
export default {
  data() {

    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登陆账号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      isPlaying: false,
      timer: true,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    canvasbg
  },
  mounted() {
    $('.demo-ruleForm').hide()
    // $('input').attr('autofocus')
  },
  methods: {
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 1)'
      })
      setTimeout(() => {
        loading.close()
      }, 3000)
    },
    show_login_form(val) {
      if (val) {
        $('.demo-ruleForm').show(600)
      }
    },
    submitForm(formName) {
      let that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          that.$ajax({
            method: 'post',
            url: 'users/login',
            params: {
              username: that.ruleForm.username,
              password: that.ruleForm.password
            }
          }).then(function(res) {
            if (res.data.error_code == 200) {
              sessionStorage.setItem('user', JSON.stringify(that.ruleForm.username))
              that.$store.dispatch('login')
              console.log(that.ruleForm.username)
              that.openFullScreen()
              that.$router.push('/home')
            }
            if (res.data.error_code == -200) {
              that.animal()
              that.play()
              console.log('账号或密码错误')
            }
          }).catch(function(err) {
            console.log(err)
          })
        } else {
          console.log('error submit!!')
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    animal() {
      // $('.demo-ruleForm').addClass('shake-hard')
      $('.demo-ruleForm').addClass('shake-rotate warning-style')
      setTimeout(function() {
        // $('.demo-ruleForm').removeClass('shake-hard')
        $('.demo-ruleForm').removeClass('shake-rotate warning-style')
      }, 300)
    },

    play() {
      let audio = $('#audio')[0]
      audio.play()
    },
    stop() {
      let audio = $('#audio')[0]
      if (this.isPlaying) {
        this.isPlaying = false
        audio.pause()
        audio.currentTime = 0
      }
    }
  }
}

</script>
<style lang="scss" scoped>
.wers-login-box {
  .demo-ruleForm {
    position: fixed; // background-color: rgba(150, 150, 150, .4);
    border-radius: 10px;
    padding-right: 70px;
    padding-top: 50px;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -110px;
    z-index: 100;
  }
  .warning-style {
    // border: 1px solid #ff4c02;
    // box-shadow: 0 0 5px #ff4c02;
  }
}

</style>
<style type="text/css" media="screen">
@import url('../../static/bg/css/csshake.css');

.el-form-item__label {
  color: #fff;
}

</style>
