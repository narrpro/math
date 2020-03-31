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
      핀번호와 이름을 기재하고 제출버튼을 누르세요.
    </v-chip>

     <v-form ref="form" v-model="valid" lazy-validation>
    <v-container>
      <v-row align="center">
          <v-text-field class="headline"
            v-model="form.inNumber"
            type="number"
            color="grey darken-2"
            :rules="[rule.required]"
            :counter="7"
            label="칠판화면 핀 번호를 입력하세요."
            height="60px"
            required
          ></v-text-field>
      </v-row>

      <v-row align="center">
          <v-text-field class="headline"
            v-model="form.inName"
            color="grey darken-2"
            :rules="[rule.required]"
            :counter="5"
            label="이름"
            height="60px"
            required
          ></v-text-field>
      </v-row>
           <v-btn class="ma-2" :disabled="!valid" tile outlined color="black" @click="validate">
      <!-- <v-btn class="ma-2" tile outlined color="black"
        @click="$router.push({name: 'home'}).catch(err=>{})"> -->
      <v-icon left>mdi-pencil</v-icon>제출</v-btn>
    </v-container>
  </v-form>
      <v-layout row wrap>
          <v-flex xs12>
          <v-card color="transparent" flat>
          <!-- <v-card color="transparent" flat v-if="!$isFirebaseAuth"> -->
            <v-card-text>
              <v-progress-circular
                :rotate="-90"
                :size="97"
                :width="13"
                color="green"
                :value="value"

              >{{ value }}%</v-progress-circular>
            </v-card-text>
            <v-card-text>화면 작성 처리중입니다..</v-card-text>
          </v-card>
          </v-flex>
        </v-layout>






    </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'FirstStu',

data () {
  return{
     interval: {},
        value: 0,
    form:{
      inNumber: '',
      inName: ''
    },
  rule: {
    required: v=> !!v || '필수 항목입니다.',
    // minLength: length => v => v.length >= length || `${length} 자리 이상으로 입력하세요.`,
    // maxLength: length => v => v.length >= length || `${length} 자리 이하으로 입력하세요.`
    },
    valid: false
  }
},
 beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 1
      }, 1000*0.3)
    },
  methods: {
    validate(){
      if(!this.$refs.form.validate()) return this.$toasted.global.error('입력을 제대로 해주세요')
      alert('ok')
      }
    },

  }

</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
