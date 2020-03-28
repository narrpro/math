import Vue from 'vue'
import * as firebase from "firebase/app"
// import "firebase/analytics"
import firebaseConfig from '../../firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
import store from '../store'
import router from '../router'




firebase.initializeApp(firebaseConfig);

// firebase.firestore().collection('test').add({ test: 'aaa' })
//     .then(r => console.log(r))
//     .catch(e => console.log(e))

Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
    Vue.prototype.$isFirebaseAuth = true
    if (user) {
        // this.$store.commit('setAction')
        router.push({ name: 'Home' }).catch(err => {})
    } else {
        // this.$store.commit('errAction')
        router.push({ name: 'login' }).catch(err => {})
    }
    store.dispatch('getUser', user)
})