<template>
  <div>
    <h1>SignUp</h1>
    <v-text-field
      label="아이디"
      v-model="userId"
    ></v-text-field>
       <v-text-field
      label="이름"
      v-model="name"
    ></v-text-field>
    <v-text-field
      label="주소"
      v-model="address"
    ></v-text-field>
      <v-btn @click="signUp">회원가입</v-btn>
  </div>
</template>

<script>
// import { EventBus } from '@/main.js'
import { mapActions } from 'vuex'
// import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        userId: null,
        password: null,
        name: null,
        address: null,
        src: null
      }
    },
    methods: {
      // ...mapMutations(['addUsers','double']),
      ...mapActions(['addUsers']),
      //addUsers는 서로다름...나중에 다른함수명을 쓰자
      signUp() {
        let userObj = {
          userId: this.userId,
          password: this.password,
          name: this.name,
          address: this.address,
          src: this.src
        }
        // this.addUsers(userObj)
        // this.$store.commit('addUsers', userObj)
        //mutaions 안의 addUsers 부를때 commit씀
        // this.$store.dispatch('addUsers', userObj)
        // actions addUsers을 부름
        this.addUsers(userObj)
        this.clearForm()
      },
      clearForm() {
        this.userId = null,
        this.password = null,
        this.name = null,
        this.address = null,
        this.src = null
      }
    }
  }
</script>