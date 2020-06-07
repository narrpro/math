<template>
  <v-container>
    <v-layout row wrap pt-5 text-center
    style="max-width:400px; margin:0 auto;"
    >
     <v-flex xs12>
       <v-chip
      class="ma-2"
      color="green"
      text-color="white"
    >
    <v-avatar
        left
        class="green darken-4"
      >
        &#9997;
      </v-avatar>
      핀번호가 나타나면 이름을 기재후 제출버튼을 누르세요.
    </v-chip>

     <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row align="center">
          <v-text-field class="headline"
            v-model="setRoom"
            type="number"
            color="grey darken-2"
            :rules="[rule.required]"
            :counter="7"
            label="화면의 핀 번호를 기록합니다."
            height="60px"
            required
          ></v-text-field>
      </v-row>

      <v-row align="center">
          <v-text-field class="headline"
            v-model="name"
            color="grey darken-2"
            :rules="[rule.required]"
            :counter="5"
            label="이름"
            height="60px"
            required
          ></v-text-field>
      </v-row>
        <v-btn class="ma-2" :disabled="!valid" tile outlined color="black" @click="sendMsg">
        <v-icon left>mdi-pencil</v-icon>제출</v-btn>
        <v-btn class="ma-2" tile outlined color="black" @click="inputRoom"  v-if="$store.state.user">
        <v-icon left>mdi-pencil</v-icon>Pin 번호만들기</v-btn>
    </v-container>
  </v-form>

    </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
export default {
  data () {
    return {
      setRoom: '',
      name: '',
      rule: {
        required: v => !!v || '필수 항목입니다.'
      },
      valid: false,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  created() {
  },
  mounted () {
  },
  methods: {
    inputRoom(){
      sessionStorage.clear()
      let setRoom = Math.floor(Math.random()*100000+1000);
      sessionStorage.setItem("room",setRoom);
      this.setRoom = sessionStorage.getItem("room")
      sessionStorage.setItem("name",'선생님')
      this.name = '선생님'
    },
    sendMsg () {
       this.$socket.emit('chat', {
        name: this.name,
        room: this.setRoom,
        id: this.$socket.id
        })
        // sessionStorage.setItem("room",this.setRoom)
        // sessionStorage.setItem("name",this.name)
        sessionStorage.setItem("id",this.$socket.id)
        this.name = ''
        this.setRoom = ''
        this.$router.push('/teacherone').catch(err=>{})
      }
    },

}

</script>

