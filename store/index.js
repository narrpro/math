import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        allUsers: [
            { userId: 'hoza123', name: 'narrpro', address: '공주' },
            { userId: 'max123', name: '탄천중', address: '탄천' },
            { userId: 'lego123', name: '학습연구년', address: '내포시' },
        ],

        token: null,
        user: null,
        inLogin: false,
        inError: false
    },
    // computed  게산된 애칭을 만든다
    getters: {
        //user 자식콤포넌트연습
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
        //user 자식콤포넌트연습
        addUsers: (state, payload) => {
            state.allUsers.push(payload)
        },

        //0326
        setUser(state, user) {
            state.user = user
        },
        //0326
        setToken(state, token) {
            state.token = token
        },
        setAction(state) {
            state.inLogin = true,
                state.inError = false
        },
        errAction(state) {
            state.inLogin = false,
                state.inError = false
        },
    },

    actions: {
        getUser({ commit }, user) {
            commit('setUser', user)
            if (!user) return
            user.getIdToken()
                .then(token => {
                    commit('setToken', token)
                    commit('setAction')
                })

        },
        addUsers: ({ commit }, payload) => {
            // context,payload
            commit('addUsers', payload)
        },

    },
    modules: {}
})

//1. 로그아웃을 할때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//2. 탭이나 창이 닫힐때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//3. 새로고침될때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)