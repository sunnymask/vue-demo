<style scoped>
    .img-Head {
        width: 200px;
        border-radius: 100px;
    }
</style>

<template>
    <img :class="{'img-Head': styleType}" :src="imgSrc">
</template>

<script>
  export default {
    props: {
      imgSrc: {
        type: String,
        default: ''
      },
      styleType: false
    }
  }
</script>
