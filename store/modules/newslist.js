import { fetchNewsList, fetchUserInfo } from '@/api/index.js'
export default {
    namespaced: true,
    state: {
        users: [],
        uusers: [],

    },
    mutations: {
        Set_News(state, d) {
            state.users = d
        },
        Set_User(state, d) {
            state.uusers = d
        }
    },
    actions: {
        Fetch_News(context) {
            fetchNewsList()
                .then(res => {
                    context.commit('Set_News', res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_User({ commit }, id) {
            fetchUserInfo(id)
                .then(({ data }) => {
                    commit('Set_User', data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
    getters: {},
    modules: {}
}