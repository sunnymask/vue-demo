<template>
    <div id="page">
        <section class="content">
            <ul class="news">
                <li class="news-li" v-for="item in myJson">
                    <a :href="item.link" class="db">
                        <div class="clearfix" v-if="item.picInfo && item.picInfo.length == 1">
                            <section class="pull-left">
                                <p class="news-title">{{item.title}}</p>
                                <span class="news-from">{{item.source}}</span>
                            </section>
                            <section class="pull-right">
                                <img :src="item.picInfo[0].url">
                            </section>
                        </div>
                        <div v-else>
                            <p class="news-title">{{item.title}}</p>
                            <section class="clearfix wBox">
                                <div class="img-box pull-left" v-for="key in item.picInfo">
                                    <img :src="key.url">
                                </div>
                            </section>
                            <span class="news-from">{{item.source}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "myNews",
        data() {
            return {
                myJson: [],
            }
        },
        mounted() {
            let that = this
            that.myJson = that.$store.state.news
        },
        methods: {

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
    a {
        text-decoration: none;
    }
    .content{
        width: 500px;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    .db {
        display: block;
    }
    .img-box {
        width: 33.333%;
    }
    .wBox > .img-box:first-child {
        text-align: left;
    }
    .wBox > .img-box:nth-child(2) {
        text-align: center;
    }
    .wBox > .img-box:last-child {
        text-align: right;
    }
    img {
        width: 150px;
    }
    .news {
        height: 350px;
        overflow-y: scroll;
    }
    .news-li {
        padding: 15px 5px;
        text-align: left;
        font-size: 14px;
        border-bottom: 1px solid #dddddd;
    }
    .news-title {
        color: #333;
    }
    .news-from {
        color: #999;
        font-size: 12px;
    }
</style>
