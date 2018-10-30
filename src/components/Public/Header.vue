<style scoped>
    .img-Head {
        width: 200px;
        border-radius: 100px;
    }
</style>

<template>
    <div class="page">
        <img :class="{'img-Head': styleType}" v-lazy="imgSrc" :key="imgSrc">
        <section class="goods-detail" v-html="vHtml"></section>
    </div>

</template>

<script>
  export default {
      data() {
          return {
            vHtml: ''
          }
      },
    props: {
      imgSrc: {
        type: String,
        default: ''
      },
      styleType: false
    },
      mounted() {
          let _html = '<p><img src="http://yanxuan.nosdn.127.net/64ebe703fc5ef1242fe71d9aaf295cc4.jpg" _src="http://yanxuan.nosdn.127.net/64ebe703fc5ef1242fe71d9aaf295cc4.jpg" style=""></p>'
          _html = _html.replace(/_src/g, 'data-i')
          _html = _html.replace(/src/g, 'v-lazy')
          this.vHtml = _html
      }
  }
</script>
