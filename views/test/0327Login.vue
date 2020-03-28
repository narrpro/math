<template>
<v-container fill-height style="max-width:450px" grid-list-md text-center>
  <v-layout align-center row wrap >
    <v-flex xs12>
      <v-alert type="error" color="grey darken-3" :value="isLoginError" >
        구글 아이디와 패스워드를 확인해보세요.

    </v-alert>
      <v-alert type="error" color="grey darken-3" :value="isLogin" >
      {{this.$store.state.user? this.$store.state.user.displayName : 'Not user'}}님 환영합니다. 좋은 수업되세요..^^

    </v-alert>
    <!-- ............................... -->
      <v-card>
        <v-toolbar flat height="35" color="green" dark>
          <v-toolbar-title>Google Clound</v-toolbar-title>
        </v-toolbar>
          <v-img src="../../assets/google3.jpg" height="200px"></v-img>
          <div class="pa-5">
            <v-card-title>
              Google....... Login
            </v-card-title>

            <v-card-subtitle class="text-left">
              회원가입없이 기존 구글아이디로 이용하세요.<br>
              계정이없으면 google 로그인 버튼을 <br>누르고
              계정을 만드세요.
              {{this.$store.token}}
            </v-card-subtitle>

          <v-btn color="green" block  depressed dark
            @click="signInWithGoogle"
          >google 로그인 버튼</v-btn>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapState, mapActions}  from "vuex"


export default {
  data(){
    return{

    }
  },
  computed: {
    ...mapState(["isLogin","isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
      async signInWithGoogle(){
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      },
// 로그아웃
      // signOut(){firebase.auth().signOut().then(function() {
      // Sign-out successful.
      // }).catch(function(error) {
      // An error happened.
            // })
      // }

}
</script>


//1. 로그아웃을 할때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//2. 탭이나 창이 닫힐때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
//3. 새로고침될때까지
// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
// 현재사용자의 정보를 가져오기
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//   } else {
//     // No user is signed in.
//   }
// });

//

// var user = firebase.auth().currentUser;

// if (user) {
//   // User is signed in.
// } else {
//   // No user is signed in.
// }

// 사용자삭제하기
// var user = firebase.auth().currentUser;

// user.delete().then(function() {
// User deleted.
// }).catch(function(error) {
// An error happened.
// });
