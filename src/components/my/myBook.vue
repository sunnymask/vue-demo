<template>
    <div id="page">
        <ul class="book">
            <li v-for="(item, index) in this.$store.state.shops">
                <span>编号:{{ item.snum }}<br>书名:{{ item.name }}</span>
                <a class="btn btn-danger" @click="deleteShop(index)">删除</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "book",
        methods: {
            deleteShop: function (index){
                this.$store.commit('deleteShops',index)
            }
        }
    }
</script>

<style scoped>
    ul.book {
        width: 500px;
        margin: 0 auto;
        padding: 0 0 20px;
        overflow: hidden;
    }
    ul.book > li {
        list-style: none;
        margin: 0;
        padding: 10px;
        width: 150px;
        float: left;
    }
</style>
