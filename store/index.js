import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: null,
        allUsers: [
            { userId: 'hoza123', name: 'narrpro', address: '공주' },
            { userId: 'max123', name: '탄천중', address: '탄천' },
            { userId: 'lego123', name: '학습연구년', address: '내포시' },
        ],
        testUsers: [{ email: "narr", password: "1" }],
        isLogin: false,
        isLoginError: false,
        token: null,
        access_token: null,
        //0326
        user: null,
        token: ''
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
        },
        //login store 연습
        //로그인 성공
        loginSuccess(state, payload) {
            state.isLogin = true
            state.isLoginError = false
            state.userInfo = payload
        },
        //로그인 실패
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state) {
            state.isLogin = false
            state.isLoginError = false
            state.userInfo = null
            localStorage.clear()
                // localStorage.removeItem("access_token")
        },
        //0326
        setUser(state, user) {
            state.user = user
        },
        //0326
        setToken(state, token) {
            state.token = token
        }
    },
    actions: {
        getUser({ commit }, user) {
            commit('setUser', user)
            if (!user) return
            user.getIdToken()
                .then(token => {
                    commit('setToken', token)
                })
        },
        addUsers: ({ commit }, payload) => {
            // context,payload
            commit('addUsers', payload)
        },
        //로그인 시도
        login({ dispatch }, loginObj) {
            axios
                .post("https://reqres.in/api/login", loginObj)
                .then(res => {
                    let token = res.data.token
                    localStorage.setItem("access_token", token)
                    dispatch("getMemberInfo")
                })
                .catch((err) => {
                    this.commit("loginError")
                    console.log(err)
                })
        },
        logout({ commit }) {
            commit("logout")
            router.push({ name: "Home" }).catch(err => {})
        },

        getMemberInfo({ commit }) {

            let token = localStorage.getItem("access_token")
            let config = {
                headers: {
                    "access-token": token
                }
            }

            if (token != null) {
                axios
                    .get("https://reqres.in/api/users/2", config)
                    .then(response => {
                        let userInfo = {
                            id: response.data.data.id,
                            first_name: response.data.data.first_name,
                            last_name: response.data.data.last_name,
                            avatar: response.data.data.avatar
                        }
                        commit("loginSuccess", userInfo)
                    })

                .catch(() => {
                    commit("loginError")
                })
            }

        },
    },
    modules: {}
})