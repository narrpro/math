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
        //login show boolean and token
        isLogin: false,
        // isLoginError: false,
        // userInfo: null,
        token: null,
        access_token: null,
        user: null,
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
        //login store 연습
        //로그인 성공
        loginSuccess(state, user) {
            state.isLogin = true
            state.user = user
            state.isLoginError = false
                // state.userInfo = payload
        },
        //로그인 실패
        loginError(state) {
            state.isLogin = false
            state.isLoginError = true
        },
        logout(state) {
            state.isLogin = false
            state.isLoginError = false
            state.user = null
                // state.userInfo = null
            localStorage.clear()
            this.$firebase.auth().signOut()
                // localStorage.removeItem("access_token")
        },
        //0326
        setUser(state, user) {
            state.user = user
        },
        //0326
        setToken(state, token) {
            state.token = token
        },
        // signOut() {
        //     firebase.auth().signOut()
    }
},
actions: {

    getUser({ commit }, user) {
        commit('loginSuccess', user)
            // commit('setUser', user)
        if (!user) return
        user.getIdToken()
            .then(token => {
                commit('setToken', token)
                localStorage.setItem(token)
                    // localStorage.setItem("access_token", token)
                    // dispatch("googleToken")
                    // commit("loginSuccess", user)

            })
    },

    addUsers: ({ commit }, payload) => {
        // context,payload
        commit('addUsers', payload)
    },
    // 로그인 시도

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

    async getMemberInfo({ commit }) {
        let token = localStorage.getItem("access_token")
        let config = {
            headers: {
                "access-token": token
            }
        }
        if (token != null) {
            await this.$firebase.auth().getRedirectResult()
                .then(function(result) {
                    if (result.credential) {
                        var token = result.credential.accessToken
                        localStorage.setItem("token")
                    }
                    dispatch("getMemberInfo")
                })
            commit("loginSuccess", userInfo)
                .catch(() => {
                    commit("loginError")
                })
        }

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