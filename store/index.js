import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router'
// import axios from "axios"
import newslist from './modules/newslist'
import beforelist from './modules/beforelist'
import modules from './modules'

Vue.use(Vuex)


export default new Vuex.Store({
        strict: false,
        modules: {
            newslist,
            beforelist
        },
    })
    //1. 로그아웃을 할때까지
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    //2. 탭이나 창이 닫힐때까지
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    //3. 새로고침될때까지
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)