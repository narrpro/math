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
           <!-- <v-btn class="ma-2" :disabled="!valid" tile outlined color="black" @click="$router.push({name: 'daegi'}).catch(err=>{})" exact> -->
           <v-btn class="ma-2" :disabled="!valid" tile outlined color="black" @click="post">
      <!-- <v-btn class="ma-2" tile outlined color="black"
        @click="$router.push({name: 'home'}).catch(err=>{})"> -->
      <v-icon left>mdi-pencil</v-icon>제출</v-btn>
    </v-container>
  </v-form>
      <v-layout row wrap>
          <v-flex >
          <v-card color="transparent" flat>
            <div align="center">
         <bar-chart v-on:refresh:chart="refreshChart" :propsdata="chartDataSet"></bar-chart>
            </div>
          </v-card>
          </v-flex>
        </v-layout>

    </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import BarChart from '@/components/BarChart'

export default {
   components: {
      BarChart,
    },
  name: 'FirstStu',
  data () {
    return {
      chartDataSet: [
          {
            label: '결과',
            // label: '# of Votes',
            data: [11, 18, 7, 5, 9],
            backgroundColor: [
                // 'rgba(255, 99, 132, 0.2)',
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2
        }
        ],
      interval: {},
      value: 0,
      form: {
        inNumber: '',
        inName: ''
      },
      rule: {
        required: v => !!v || '필수 항목입니다.'
      },
      valid: false
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    // this.get()

    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 1
    }, 1000 * 0.3)

  },
  methods: {
    refreshChart(){
      this.chartDataSet = [10, 20]
    },
    async post () {
      if (!this.$refs.form.validate()) { return this.$toasted.global.error('입력을 제대로 해주세요')
      } else {
      const r = await this.$firebase.firestore().collection('imsi').add({
          name: this.form.inName, number: this.form.inNumber
        })
        this.name=''
        this.number=''
        // await this.get()
      }
        this.$router.push({name: 'lv2'}).catch(err=>{})
    },
      // async post(){
      //   const r = await this.$firebase.firestore().collection('imsi').add({
      //     name: this.form.inname, id: this.form.inNumber
      //   })
      //   this.form.inNumber=''
      //   this.form.inname=''

      //   await this.get()
      // },
  }
}

</script>

