import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allUsers: [
            { userId: 'hoza123', name: 'narrpro', address: '공주' },
            { userId: 'max123', name: '탄천중', address: '탄천' },
            { userId: 'lego123', name: '학습연구년', address: '내포시' },
        ]
    },
    // computed  게산된 애칭을 만든다
    getters: {
        allUsersCount: state => {
            return state.allUsers.length
        },
        countOfSeoul: state => {
            let count = 0
            state.allUsers.forEach(user => {
                if (user.address === '공주') count++
            })
            return count
        },
        percentOfSeoul: (state, getters) => {
            return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
        }
    },
    mutations: {
        addUsers: (state, payload) => {
            state.allUsers.push(payload)
        }
    },
    actions: {
        addUsers: ({ commit }, payload) => {
            // context,payload
            commit('addUsers', payload)
        }
    },
    modules: {}
})