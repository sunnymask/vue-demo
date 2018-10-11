import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shops: [],
    po:{},
    news: []
  },
  mutations: {
    initShops: function (state, shops) {
      state.shops = shops
    },
    addShops: function (state, shop) {
      state.shops.unshift(shop)
    },
    deleteShops: function (state, index) {
      state.shops.splice(index,1)
    },
    initPo: function (state, po) {
        state.po = po
    },
    initNews: function (state, news) {
        state.news = news
    }
  },
  actions: {
    addItem({commit},shop) {
      commit('addShops',shop)
      return true
    }
  }
})
export default store
