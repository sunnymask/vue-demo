<template>
    <div class="My">
        <headerCom :imgSrc="imgSrc" :styleType=true></headerCom>
        <div class="tilte">
            <h1>个人中心</h1>
        </div>
        <ul>
            <li v-for="(item, index) in this.$store.state.shops">
                <span>编号:{{ item.snum }}<br>书名:{{ item.name }}</span>
                <a class="btn btn-danger" @click="deleteShop(index)">删除</a>
            </li>
        </ul>
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
    },
    methods: {
      deleteShop: function (index){
        this.$store.commit('deleteShops',index)
      }
    }
  }
</script>

<style scoped>
    ul {
        width: 300px;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
    }
    ul > li {
        list-style: none;
        margin: 0;
        padding: 10px;
        width: 150px;
        float: left;
    }
</style>
