<template>
    <div class="My">
        <headerCom :imgSrc="imgSrc" :styleType=true></headerCom>
        <div class="tilte">
            <h1>个人中心</h1>
        </div>
        <router-link to="/index">首页</router-link>
        <router-link to="/">退出</router-link>
    </div>
</template>

<script>
  import imgSrc from '@/assets/me.jpg'
  export default {
    name: 'My',
    data () {
      return {
        imgSrc: imgSrc
      }
    }
  }
</script>
