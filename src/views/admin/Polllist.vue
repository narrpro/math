<template>
<v-container fluid>
      <v-row no-gutters >
        <v-col cols=12 class="pa-2">
    <h1 class="text-center">OS Vote</h1>

    {{datadb}}
    <!-- <p>Vote for your favorite OS to develop on</p> -->
    <!-- <div id="hasVotedAlreadyErrorMsg" class="card-panel hidden" style="width: 30%">
      <span class="red-text text-darken-2">You have already voted, you can only vote once.</span>
    </div> -->
 <!-- <p>{{ selected || 'null' }}</p>
    <v-radio-group v-model="selected" :mandatory="true" ref="vote-form">
      <v-radio label="Windows" value="1" color="success"></v-radio>
      <v-radio label="MacOS" value="2" color="success"></v-radio>
      <v-radio label="Linux Distro" value="3" color="success"></v-radio>
      <v-radio label="Something else" value="4" color="success"></v-radio>
    </v-radio-group> -->

    <!-- <form ref="vote-from" id="vote-form" class="ml-10">
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
      <input type="submit" value="Vote" class="btn">
    </form> -->
  </v-col>
        </v-row>
  </v-container>
</template>

<script>
// import '@/plugins/mysql'
import axios from 'axios'


  export default {
    data(){
      return{
        selected: '1',
        datadb: []
      }
    },
     created(){
      axios.get('/api').then((res)=>{
      console.log(res.data)
      this.datadb = res.data
      // this.datadb = JSON.stringify(r)
    }).catch((e)=>{
      console.error(e.message)
    })
  },
    created(){
      axios.get('http://localhost:3000/api').then((r)=>{
      console.log(r.data)
      this.datadb = r.data
      // this.datadb = JSON.stringify(r)
    }).catch((e)=>{
      console.log(e.message)
    })
  }
}
</script>
      // async (()=>{
      //   try {
      //     const res = axios.get('http://localhost:3000/api')
      //     return this.datadb = res
      //   } catch(err){
      //     console.log(err)
      //   }
      // })
      // axios.get('http://localhost:3000/api').then((r)=>{
      // this.datadb = JSON.stringify(r)

        // const datadb = DB.query('select * from info', (err,d)=>{
        //   if(err) console.log(err)
        //   else this.datadb = d
        // })
      // const form = this.$refs.vote-form
      // const event;

// form.addEventListener('submit', e=>{

//     const choice = this.$refs.vote-form('input[name=os]:checked').value;
//     const data = {os: choice};

//     fetch('http://localhost:3000/poll',{
//         method: 'post',
//         body: JSON.stringify(data),
//         headers: new Headers({
//             'Content-Type': 'application/json'
//         })
//     }).then(res => res.json())
//     .catch(err => console.log(err));

//     e.preventDefault();
// });

// fetch("http://localhost:3000/poll")
//     .then(res => res.json())
//     .then(data => {
//         let votes = data.votes;
//         let totalVotes = votes.length;
//         document.querySelector('#chartTitle').textContent = `Total Votes: ${totalVotes}`;

//         let voteCounts = {
//             Windows: 0,
//             MacOS: 0,
//             Linux: 0,
//             Other: 0
//         };

//         voteCounts = votes.reduce((acc, vote) => (
//             (acc[vote.os] = (acc[vote.os] || 0) + parseInt(vote.points)), acc),
//             {}
//         );

//         let dataPoints = [
//             { label: 'Windows', y: voteCounts.Windows },
//             { label: 'MacOS', y: voteCounts.MacOS },
//             { label: 'Linux', y: voteCounts.Linux },
//             { label: 'Other', y: voteCounts.Other }
//         ];

//         const chartContainer = this.$refs.vote-form('#chartContainer');

//         if(chartContainer){

//             // Listen for the event.
//             document.addEventListener('votesAdded', function (e) {
//                 document.querySelector('#chartTitle').textContent = `Total Votes: ${e.detail.totalVotes}`;
//             });

//             const chart = new CanvasJS.Chart('chartContainer', {
//                 animationEnabled: true,
//                 theme: 'theme1',
//                 data:[
//                     {
//                         type: 'column',
//                         dataPoints: dataPoints
//                     }
//                 ]
//             });
//             chart.render();

//              // Enable pusher logging - don't include this in production
//              Pusher.logToConsole = true;

//              var pusher = new Pusher('355bbcc1238451dd1d93', {
//                cluster: 'ap2',
//                encrypted: true
//              });

//              var channel = pusher.subscribe('os-poll');

//              channel.bind('os-vote', function(data) {
//                dataPoints.forEach((point)=>{
//                    if(point.label==data.os)
//                    {
//                         point.y+=data.points;
//                         totalVotes+=data.points;
//                         event = new CustomEvent('votesAdded',{detail:{totalVotes:totalVotes}});
//                         // Dispatch the event.
//                         document.dispatchEvent(event);
//                    }
//                });
//                chart.render();
//              });
//         }

// });
    // },

