import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase-storage'
import 'firebase/database'

firebase.initializeApp(firebaseConfig)
//test
// const db = firebase.firestore()
// db.settings({ timestampsInSnapshots: true})
//test end
Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('getUser', user)
})
