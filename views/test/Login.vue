<template>
<v-container fill-height style="max-width:450px" grid-list-md text-center>
  <v-layout align-center row wrap >
    <v-flex xs12>
      <v-alert type="error" color="grey darken-3" :value="isLoginError" >
        아이디와 패스워드를 확인해보세요.

    </v-alert>
      <v-alert type="error" color="grey darken-3" :value="isLogin" >
      환영합니다. 좋은 수업되세요..^^
    </v-alert>
      <v-card>
        <v-toolbar flat height="40" color="green" dark>
          <v-toolbar-title>id:eve.holt@reqres.in & pw:cityslicka </v-toolbar-title>
        </v-toolbar>
          <div class="pa-5">
          <v-text-field
            color="grey darken-2"
            v-model="email"
            label="이메일을 입력하세요"
          >
          </v-text-field>
          <v-text-field
            color="grey darken-2"
            v-model="password"
            type="password"
            label="패스워드를 입력하세요"
          >
          </v-text-field>
          <v-btn color="green" block  depressed dark
            @click="login({
              email: email,
              password: password
            })"
          >로그인 버튼</v-btn>
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
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState(["isLogin","isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),
  },
}
</script>