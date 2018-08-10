<template>
    <div class="IndexPage">
        <headerCom :imgSrc="imgSrc" :styleType=true></headerCom>
        <div class="tilte">
            <h1>这是首页</h1>
        </div>
        <router-link to="/my">个人中心</router-link>
        <router-link to="/">退出</router-link>
    </div>
</template>

<script>
  import imgSrc from '@/assets/me.jpg'
  export default {
    name: 'IndexPage',
    data() {
      return {
        imgSrc: imgSrc
      }
    }
  }
</script>
