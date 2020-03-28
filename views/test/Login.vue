<template>
<v-container fill-height style="max-width:450px" grid-list-md text-center>
  <v-layout align-center row wrap >
    <v-flex xs12>
      <v-alert type="error" color="grey darken-3"  :value="inLogin">
        구글 아이디와 패스워드를 확인해보세요.
    </v-alert>
      <v-alert type="error" color="grey darken-3" :value="inLogin" >
      {{this.$store.state.user? this.$store.state.user.displayName : 'Not user'}}님 환영합니다. 좋은 수업되세요..^^
    </v-alert>
      <v-card>
        <v-toolbar flat height="35" color="green" dark>
          <v-toolbar-title>Google Clound({{this.$store.state.user? this.$store.state.user.email : 'Not user'}})</v-toolbar-title>
        </v-toolbar>
          <v-img src="../../assets/google3.jpg" height="200px"></v-img>
          <div class="pa-5">
            <v-card-title>
            👨‍🏫  Google계정으로 Login
            </v-card-title>
            <v-card-subtitle class="text-left">
              회원가입없이 기존 구글아이디로 이용하세요.<br>
              계정이없으면 아래 로그인 버튼을 누르고<br>
              계정을 만드세요.<br>
              Google 📵개인정보처리방침 및 서비스 약관의 적용을 받습니다.
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
    ...mapState(["inLogin","inError"])
  },
  methods: {
    // ...mapActions(["login"]),
      async signInWithGoogle(){
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      },
// 로그아웃
      async signOut(){
        await firebase.auth().signOut()

},
}
}
</script>

