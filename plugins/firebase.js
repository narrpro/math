import Vue from 'vue'
import * as firebase from "firebase/app"
// import "firebase/analytics"
import firebaseConfig from '../../firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
import store from '../store'
import router from '../router'




firebase.initializeApp(firebaseConfig);


Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
    Vue.prototype.$isFirebaseAuth = true
    if (user) {

        router.push({ name: 'mother' }).catch(err => {})
    } else {

        router.push({ name: 'carddb' }).catch(err => {})
    }
    store.dispatch('getUser', user)
})