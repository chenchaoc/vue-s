/*
 * @Author:  chenchao
 * @Date:  2018-08-28 14:38:53
 * @email:  chenchao3.sh@superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-09-12 13:05:56
 */

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
