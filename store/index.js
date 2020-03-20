import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

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
    },
    actions: {
        addUsers: ({ commit }, payload) => {
            // context,payload
            commit('addUsers', payload)
        },
        //로그인 시도
        login({ state, commit }, loginObj) {
            let selectUser = null
            state.testUsers.forEach(user => {
                if (user.email === loginObj.email) selectUser = user
            })
            if (selectUser === null || selectUser.password !== loginObj.password)
                commit('loginError')
            else {
                commit('loginSuccess', selectUser)
                router.push({ name: "relogin" })
                    //삼항연산자 두번 적용
            }

        }

    },
    modules: {}
})