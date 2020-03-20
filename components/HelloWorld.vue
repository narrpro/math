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
          <v-text-field
            label="칠판화면 핀 번호를 입력하세요."
            outlined
            dense
            type="number"
            color="grey darken-2"
          ></v-text-field>

      <v-text-field
        v-model="inName"
        label="본인 이름을 입력하세요."
        color="grey darken-2"
      ></v-text-field>

      <v-btn class="ma-2" tile outlined color="black"
        @click="">
      <!-- <v-btn class="ma-2" tile outlined color="black"
        @click="$router.push({name: 'home'}).catch(err=>{})"> -->
      <v-icon left>mdi-pencil</v-icon>제출</v-btn>


      <v-col class="mb-4" align-center>
         <v-progress-linear value="60" height="15" color="white" background-color="success"
          :indeterminate="query"
          :query="true"
          v-model="value"
          :active="show"
        ></v-progress-linear>
      </v-col>
    </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    name: 'HelloWorld',

    data(){
      return{
        inNum: null,
        inName: null,
        value: 0,
        query: false,
        show: true,
        intervarl: 0
      }
    },
    mounted () {
    this.queryAndIndeterminate()
  },

  beforeDestroy () {
    clearInterval(this.interval)
  },

  methods: {
    queryAndIndeterminate () {
      this.query = true
      this.show = true
      this.value = 0
      this.query = false

      this.interval = setInterval(() => {
        if (this.value === 100) {
          clearInterval(this.interval)
          this.show = false
          return setTimeout(this.queryAndIndeterminate, 2000)
        }
        this.value += 2
      }, 1000)
    }
  }
}


</script>
