<template>
    <div id="page">
        <div class="search-box">
            <input type="text" placeholder="请输入城市，如：成都" v-model="cityName">
            <button class="btn btn-info" @click="search">查询</button>
        </div>
        <div class="content">
            <ul class="weather">
                <li class="" v-for="item in weatherData.forecast">
                    {{item.date}}：{{item.high}}，{{item.low}}，{{item.fengli}}，{{item.fengxiang}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "weather",
        data() {
            return {
                weatherData: {},
                cityName: ''
            }
        },
        mounted() {
          let that = this
          that.cityName = '成都'
          that.search()
        },
        methods: {
            search: function () {//https://www.apiopen.top/weatherApi?city=成都
                let that = this
                that.$axios.get('https://www.apiopen.top/weatherApi?city='+that.cityName).then(function (response) {
                    if (response.data.code == '200') {
                        that.weatherData = response.data.data
                        console.log(response)
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    input {
        text-indent: 5px;
    }
    .search-box {
        width: 500px;
        margin: 0 auto;
    }
    .content{
        width: 500px;
        margin: 0 auto;
        padding: 20px 0;
    }
    .weather > li {
        list-style: none;
        padding: 5px 0;
    }
</style>
