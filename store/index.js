import Vue from 'vue'
import Vuex from 'vuex'
import newslist from '@/store/modules/newslist'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: false,
  modules: { newslist },
  state: {
    title: '원래 제목',
    user: null,
    token: '',
    claims: null,
    firebaseLoaded: false
  },
  mutations: {
    setTitle (state, p) {
      state.title = p
    },
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    },
    setClaims (state, claims) {
      state.claims = claims
    },
    setFirebaseLoaded (state) {
      state.firebaseLoaded = true
    }
  },
  actions: {
    async getUser ({ dispatch, commit }, user) {
      commit('setUser', user)
      if (!user) {
        commit('setFirebaseLoaded')
        return null
      }
      try {
        await dispatch('visitUser')
      } catch (e) { console.log(e.message) }
      await dispatch('getToken')
      commit('setFirebaseLoaded')
      return true
    },
    async visitUser ({ state }) {
      if (!state.user.displayName) return false
      const increment = Vue.prototype.$firebase.firestore.FieldValue.increment(1)
      await Vue.prototype.$firebase.firestore().collection('users').doc(state.user.uid)
        .update({
          displayName: state.user.displayName,
          visitedAt: new Date(),
          visitCount: increment
        })
      return true
    },
    async getToken ({ commit, state }) {
      const token = await state.user.getIdToken(true)
      commit('setToken', token)
      const { claims } = await state.user.getIdTokenResult()
      commit('setClaims', claims)
    }
  }
})
