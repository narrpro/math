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
      v-show="firstss"
    >
    <v-avatar
        left
        class="green darken-4"
      >
        &#9997;
      </v-avatar>
      핀번호가 나타나면 이름을 기재후 제출버튼을 누르세요.
    </v-chip>

     <v-form ref="form" v-model="valid" lazy-validation v-show="firstss">
    <v-container >
      <v-row align="center">
          <v-text-field class="headline"
            v-model="setRoom"
            type="number"
            color="grey darken-2"
            :rules="[rule.required]"
            :counter="6"
            label="화면의 핀 번호를 기록합니다."
            height="60px"
            required
          ></v-text-field>
      </v-row>

      <v-row align="center">
          <v-text-field class="headline"
            v-model="name"
            color="grey darken-2"
            :rules="namerule"
            :counter="3"
            label="이름"
            height="60px"
            required
          ></v-text-field>
      </v-row>
        <v-btn class="ma-2" :disabled="!valid" tile color="success" @click="validate">
        <v-icon left>mdi-pencil</v-icon>제출</v-btn>
    </v-container>
  </v-form>

    </v-flex>
    </v-layout>
  </v-container>

</template>
<script>
// import StudentWait from '@/components/test/StudentWait.vue';

export default {
   components: {
      // StudentWait,
    },
  data () {
    return {
      setRoom: '',
      name: '',
      rule: {
        required: v => !!v || '필수 항목입니다.'
      },
      namerule: [
        v => (v && v.length <= 3),
        v => !!v || '이름을 기재하세요',
      ],
      valid: true,
      firstss: true,
      secondss: false,
      Boolean
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  created() {
  },

  methods: {
    validate () {
      let tt=''
      tt = this.$refs.form.validate()
      if (tt == true){
        sessionStorage.clear()
         this.$socket.emit('chat', {
          name: this.name,
          room: this.setRoom,
          id: this.$socket.id
          })
          sessionStorage.setItem("room",this.setRoom)
          sessionStorage.setItem("name",this.name)
          sessionStorage.setItem("id",this.$socket.id)
          this.name = ''
          this.setRoom = ''
          this.firstss = false
          this.secondss = true
           this.$router.push('/daegi').catch(err=>{})
        } else { console.log('tt',tt);
          }

      }
    },

}
</script>

