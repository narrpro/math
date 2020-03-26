<template>
<v-container fill-height style="max-width:450px" grid-list-md text-center>
  <v-layout align-center row wrap >
    <v-flex xs12 >
       {{$store.state.user? $store.state.user.displayName : 'Not user'}}
       {{$store.state.token}}
      <v-card>
        <v-toolbar flat height="40" color="green" dark>
          <v-toolbar-title>id:eve.holt@reqres.in & pw:cityslicka </v-toolbar-title>
        </v-toolbar>
          <div class="pa-5">
          <v-text-field
            color="grey darken-2"
            v-model="email"
            label="Google email을 입력하세요"
          >
          </v-text-field>
          <v-text-field
            color="grey darken-2"
            v-model="password"
            type="password"
            label="Google password를 입력하세요"
          >
          </v-text-field>
          <span class="pa-1">

          <v-btn color="green" depressed dark
            @click="login({
              email: email,
              password: password
            })"
          ><v-icon color="black">mdi-account-key</v-icon>
          로그인 </v-btn>
          </span>
          <span class="pa-1">
          <v-btn color="green" depressed dark
            @click="signInWithGoogle"
          ><v-icon color="black">mdi-gmail</v-icon>
          Google로그인 </v-btn>
          </span>
          <span class="pa-1">
          <v-btn color="green" depressed dark
            @click="signOut"
          ><v-icon color="black">mdi-gmail</v-icon>
          logout </v-btn>
          </span>

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
      email: '',
      password: ''

    }
  },
  computed: {

  },
  methods: {
    async signInWithGoogle(){
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    async signInEmail(){
      await this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    },
    async signOut(){
      await this.$firebase.auth().signOut()
    }

  },
}
</script>