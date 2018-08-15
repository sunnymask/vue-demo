import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shops: []
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
