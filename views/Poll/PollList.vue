<template>
  <v-container fluid>
    <v-row justify="center" >
      <v-col cols=1>
        </v-col>
          <v-col cols=11 class="pa-2">
            <h1 class="text-center">OS Vote</h1>
              <p class="body-2 font-weight-black">mahtQ.kr Poll연습</p>
                <span class="red--text body-2">You have already voted, you can only vote once.</span>
                  <!-- <p class="body-2">{{ selected || '선택하세요' }}</p>
                    <v-radio-group v-model="selected" id="voteform" class="body-1 font-weight-black">
                      <v-radio name="os" label="Windows" value="1" color="success"></v-radio>
                      <v-radio name="os" label="MacOS" value="2" color="success"></v-radio>
                      <v-radio name="os" label="Linux Distro" value="3" color="success"></v-radio>
                      <v-radio name="os" label="Something else" value="4" color="success"></v-radio>
                    </v-radio-group> -->
                <form id="testform" class="ml-10">
                <p>
                  <label>
                    <input type="radio" name="os" id="windows" value="Windows">
                    <span for="windows">Windows</span>
                  </label>
                <p>
                  <label>
                    <input type="radio" name="os" id="macos" value="MacOS">
                    <span for="macos">MacOS</span>
                  </label>
                <p>
                  <label>
                    <input type="radio" name="os" id="linux" value="Linux">
                    <span for="linux">Linux Distro</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="radio" name="os" id="other" value="Other">
                    <span for="other">Something else</span>
                  </label>
                </p>
                <v-btn class="ma-2" tile color="indigo" dark type="submit" value="Vote">Tile Button</v-btn>
                <!-- <input type="submit" value="Vote"> -->
              </form>
        </v-col>
    </v-row>
    <v-row justify="center">
      {{ message }}
     </v-row>
    <v-row justify="center">
     <bar-chart v-on:refresh:chart="refreshChart" :propsdata="chartDataSet"></bar-chart>
     </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import * as Pusher from 'pusher'
import BarChart from '@/components/BarChart'

export default {
  components: {
      BarChart,
    },
  data() {
    return {
      selected: '',
      message: [],
       chartDataSet: [
          {
            label: '결과',
            // label: '# of Votes',
            data: [11, 18, 7, 5],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 2
        }
        ],

    }
  },
  methods: {
    refreshChart(){
      this.chartDataSet = [10, 20]
  },
  },
   created() {

  },
  mounted() {
     Pusher.logToConsole = true;
    var pusher = new Pusher('9bb3eace331b9e1a7559', {
      cluster: 'ap3',
      forceTLS: true
    });
    var channel = pusher.subscribe('ch1');
    channel.bind('my-event', function(data) {
      app.messages.push(JSON.stringify(data));
    });
//     const t = document.getElementById('testform')

//     t.addEventListener('submit', (e) => {
//       const choice =  document.querySelector('input[name=os]:checked').value;
//       // const data = { os: choice }
//       axios({
//         url: 'http://localhost:3000/vote',
//         method: 'post',
//         mode: 'cors',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json;charset=UTF-8'
//         },
//         data: {
//           os: choice
//         }
//         }).catch(err => console.log(err))
//         // console.log(os);

//           e.preventDefault();
//       });
    }
}
</script>


