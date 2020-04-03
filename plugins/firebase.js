import Vue from 'vue'
import * as firebase from "firebase/app"
// import "firebase/analytics"
import firebaseConfig from '../../firebaseConfig'
import "firebase/auth"
import "firebase/firestore"
import store from '../store'
// import router from '../router'




firebase.initializeApp(firebaseConfig);


Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
    store.dispatch('getUser', user)
        // .then(() => {
        //     if (user) {

    //         router.push({ name: 'login' }).catch(err => {})
    //     } else {

    //         router.push({ name: 'Home' }).catch(err => {})
    //     }

    // })
})