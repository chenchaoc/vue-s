import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  actions: {
    startLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: true })
    },
    stopLoading({ commit }) {
      commit('updateLoadingStatus', { isLoading: false })
    }
  }
})

export default store
