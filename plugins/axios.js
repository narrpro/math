import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const firebaseAPI = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://us-central1-mathq-bfb87.cloudfunctions.net' : 'http://localhost:5001/mathq-bfb87/us-central1/',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' }
})

firebaseAPI.interceptors.request.use(function(config) {
    //token 자리
    config.headers.authorization = store.state.token
    return config
}, function(err) {
    return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI