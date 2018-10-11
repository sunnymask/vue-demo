<template>
    <div class="My">
        <headerCom :imgSrc="imgSrc" :styleType=true></headerCom>
        <div class="tilte">
            <h1>个人中心</h1>
        </div>
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" :class="[firstIn == 0 ? 'active' : '']"><a @click="changeView(0)" role="tab" data-toggle="tab">我的书籍</a></li>
            <li role="presentation" :class="[firstIn == 2 ? 'active' : '']"><a @click="changeView(2)" role="tab" data-toggle="tab">热门新闻</a></li>
            <li role="presentation" :class="[firstIn == 1 ? 'active' : '']"><a @click="changeView(1)" role="tab" data-toggle="tab">诗词鉴赏</a></li>
            <li role="presentation" :class="[firstIn == 3 ? 'active' : '']"><a @click="changeView(3)" role="tab" data-toggle="tab">天气预报</a></li>
        </ul>
        <transition name="transitionRouter" mode="out-in">
            <router-view :is="currentTab" keep-alive></router-view>
        </transition>
        <router-link to="/index">首页</router-link>
        <router-link to="/">退出</router-link>
    </div>
</template>

<script>
  import imgSrc from '@/assets/me.jpg'
  import myBook from '@/components/my/myBook'
  import myApp from '@/components/my/myApp'
  import myNews from '@/components/my/myNews'
  import weather from '@/components/my/weather'
  export default {
    name: 'My',
    data () {
      return {
          imgSrc: imgSrc,
          firstIn: 0,
          currentTab: myBook
      }
    },
      mounted() {
        let that = this
          that.$axios.post('https://www.apiopen.top/journalismApi', /*{
                firstName: 'Fred',
                lastName: 'Flintstone'
            }*/).then(function (response) {
              if (response.data.code == '200') {
                  that.$store.commit('initNews', response.data.data.toutiao)
              }
          }).catch(function (error) {
              console.log(error);
          })
          that.$axios.get('http://api.apiopen.top/recommendPoetry', /*{
                firstName: 'Fred',
                lastName: 'Flintstone'
            }*/).then(function (response) {
              if (response.data.code == '200') {
                  that.$store.commit('initPo', response.data.result)
              }
          }).catch(function (error) {
              console.log(error);
          })
      },
      methods: {
          changeView: function (index) {
              this.firstIn = index
              if (index == 1) {
                  this.currentTab = myApp
              } else if (index == 0) {
                  this.currentTab = myBook
              } else if (index == 2) {
                  this.currentTab = myNews
              } else if (index == 3) {
                  this.currentTab = weather
              }
          }
      },
      comments:{
          myBook,
          myApp,
          myNews,
          weather
      }
  }
</script>

<style scoped>
    .nav-tabs {
        width: 500px;
        margin: 0 auto 10px;
    }
</style>
