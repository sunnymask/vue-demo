<template>
    <div class="IndexPage">
        <headerCom :imgSrc="imgSrc" :styleType=true></headerCom>
        <div class="tilte">
            <h1>这是首页</h1>
        </div>
        <form @submit.prevent="onAddShop" style="width: 350px;margin: 0 auto 20px auto;">
            <p>书名</p>
            <input class="form-control" type="text" name="name" v-model="newShopData.name">
            <p>编号</p>
            <input class="form-control" type="text" name="snum" v-model="newShopData.snum">
            <input class="btn btn-info" type="submit" value="添加" style="margin-top: 10px;">
        </form>
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
        imgSrc: imgSrc,
        newShopData: {}
      }
    },
    methods: {
      onAddShop: function () {
        let that = this
        that.$store.dispatch('addItem',that.newShopData).then((success) => {
          console.log(that.$store.state.shops)
          alert('添加成功！')
        })
      }
    }
  }
</script>
