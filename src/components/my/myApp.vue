<template>
    <div id="page">
        <section class="content">
            <p class="p-title">{{myJson.title}}</p>
            <p class="author">{{myJson.authors}}</p>
            <ul class="p-ul">
                <li class="p-li" v-for="item in pJson">
                    {{item}}
                </li>
            </ul>
            <a @click="refresh">换一首</a>
        </section>
    </div>
</template>

<script>
    export default {
        name: "myApp",
        data() {
            return {
                myJson: '',
                pJson: []
            }
        },
        mounted() {
          let that = this
          that.myJson = that.$store.state.po
          that.pJson = that.myJson.content.split('|')
        },
        methods: {
            refresh: function() {
                let that = this
                that.$axios.post('/recommendPoetry', /*{
                    firstName: 'Fred',
                    lastName: 'Flintstone'
                }*/).then(function (response) {
                    if (response.data.code == '200') {
                        that.$store.commit('initPo', response.data.result)
                        that.myJson = response.data.result
                        that.pJson = that.myJson.content.split('|')
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    ul, li {
        margin: 0;
        padding: 0;
    }
    li {
        list-style: none;
    }
    .content{
        width: 500px;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    a {
        display: block;
        cursor: pointer;
        margin-top: 20px;
    }
</style>
