<template>
<v-container fill-height style="max-width:450px" grid-list-md text-center>
  <v-layout align-center row wrap >
    <v-flex xs12>
      <v-card>
        <v-toolbar flat height="40" color="green" dark>
          <v-toolbar-title>narr@1818.com/1111 연습해보세요</v-toolbar-title>
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
            @click="login()"
          >로그인 버튼</v-btn>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data(){
    return{
      email: null,
      password: null,
      testUsers: [
        { id: 1, name: "narrpro", email: "narr@1818.com", password: "1111"},
        { id: 2, name: "narr", email: "narr@1818.com", password: "1111"},
        { id: 3, name: "babo", email: "narr@1818.com", password: "1111"},
      ]
    }
  },
  methods: {
    login(){
      let selectUser = null
      this.testUsers.forEach(user =>{
        if (user.email=== this.email) selectUser = user
      })
      if(selectUser === null) alert("회원가입하세요^^")
      else{
        if(selectUser.password !== this.password) alert("이메일과 비번이 틀립니다.ㅜ.ㅜ")
        else{
          alert("login 되었습니다.^^")
        }
      }
    }
  },
}
</script>