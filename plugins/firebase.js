import Vue from 'vue'
import * as firebase from "firebase/app"
// import "firebase/analytics"
// import "firebase/auth"
import firebaseConfig from '../../firebaseConfig'
import "firebase/firestore"




firebase.initializeApp(firebaseConfig);

// firebase.firestore().collection('test').add({ test: 'aaa' })
//     .then(r => console.log(r))
//     .catch(e => console.log(e))

Vue.prototype.$firebase = firebase