<style scoped>
    .form-group {
        width: 350px;
        margin: 0 auto 15px;
    }
</style>

<template>
  <div class="hello">
    <headerCom :imgSrc="imgSrc"></headerCom>
    <h1>{{ msg }}</h1>
    <div class="form-group" :class="{ 'has-warning': isUser }">
      <input class="form-control" type="text" :placeholder="[isUser ? '请输入账号' : '账号']" @keyup.enter="toLoginBtn" v-model="user" />
    </div>
    <div class="form-group" :class="{'has-warning': isPass }" >
      <input class="form-control" type="password" :placeholder="[isPass ? '请输入密码' : '密码']" @keyup.enter="toLoginBtn" v-model="password" />
    </div>
    <button class="btn btn-danger" @click="toLoginBtn">点我登录</button>
  </div>
</template>

<script>
import imgSrc from '@/assets/logo.png'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Login',
      isUser: false,
      isPass: false,
      user: '',
      password: '',
      imgSrc: imgSrc
    }
  },
    beforeCreate() {
        this.$Progress.start()
    },
    mounted() {
      let that = this
      setTimeout(function () {
          that.$Progress.fail()
      },5000)
    },
  methods: {
    toLoginBtn: function () {
      if (!this.user || this.user === '') {
        this.isUser = true;
        return;
      }else if(!this.password || this.password === '') {
        this.isPass = true;
        return;
      }else if(this.user !== 'admin' || this.password !== 'admin123') {
        alert("账号或密码错误!");
        return;
      }else {
        this.$router.push('/index')
      }
    }
  }
}
</script>
