import Vue from 'vue'
import axios from 'axios'

const firebaseAPI = axios.create({
    baseURL: 'http://localhost:5000/mathq-bfb87/us-central1/',
    timeout: 3000,
    headers: { 'X-Custom-Header': 'foobar' }
})

firebaseAPI.interceptors.request.use(function(config) {
    //token 자리
    config.headers.authorization = 123
    return config
}, function(err) {
    return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI