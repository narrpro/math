<template>
  <v-item-group>
    <v-container fluid>
      <v-container>
        <!--  first -->
        <v-row justify="center">
          <v-col md="4">
            <v-item :active1="active1">
            <!-- <v-item v-slot:default="{ active, toggle }"> -->
              <v-card
              height="60px"
              :color="active1 ? 'yellow darken-4' : 'green'"
              class="d-flex align-center"
              dark
              @click="castingVote('1')"
              >
                <div v-if="!active1"
                    class="display-1 flex-grow-1 text-center">
                    1번
                  </div>
                <div v-if="active1"
                  class="display-1 flex-grow-1 text-center">
                  1번
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active2="active2">
              <v-card
              height="60px"
              :color="active2 ? 'yellow darken-4' : 'green'"
              class="d-flex align-center"
              dark
              @click="castingVote('2')"
              >
                <div v-if="!active2"
                    class="display-1 flex-grow-1 text-center">
                    2번
                </div>
                <div v-if="active2"
                  class="display-1 flex-grow-1 text-center">
                2번
                </div>
          </v-card>
            </v-item>
          </v-col>
        </v-row>
        <!-- second -->
        <v-row justify="center">
          <v-col md="4">
            <v-item :active3="active3">
              <v-card
              height="60px"
              :color="active3 ? 'yellow darken-4' : 'green'"
              class="d-flex align-center"
              dark
              @click="castingVote('3')"
              >
                <div v-if="!active3"
                    class="display-1 flex-grow-1 text-center">
                    3번
                  </div>
                <div v-if="active3"
                  class="display-1 flex-grow-1 text-center">
                  3번
                </div>
              </v-card>
            </v-item>
          </v-col>
          <v-col md="4">
            <v-item :active4="active4">
              <v-card
              height="60px"
              :color="active4 ? 'yellow darken-4' : 'green'"
              class="d-flex align-center"
              dark
              @click="castingVote('4')"
              >
                <div v-if="!active4"
                    class="display-1 flex-grow-1 text-center">
                    4번
                </div>
                <div v-if="active4"
                  class="display-1 flex-grow-1 text-center">
                4번
                </div>
          </v-card>
            </v-item>
          </v-col>
        </v-row>
        <!-- third -->
        <v-row justify="center">
          <v-col md="4">
            <v-item :active5="active5">
              <v-card
              height="60px"
              :color="active5 ? 'yellow darken-4' : 'green'"
              class="d-flex align-center"
              dark
              @click="castingVote('5')"
              >
                <div v-if="!active5"
                    class="display-1 flex-grow-1 text-center">
                    5번
                </div>
                <div v-if="active5"
                  class="display-1 flex-grow-1 text-center">
                  5번
                </div>
              </v-card>
            </v-item>
          </v-col>
          <!-- empyt -->
          <v-col md="4">
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-item-group>
</template>

<script>
import * as Ably from 'ably';
const realtime = new Ably.Realtime({ key: 'KAkf3Q.SCiN9g:hQiVrtIztI6RvWYK'})

  export default {
    name: 'Ably',
    data(){
      return{
        choice: '',
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false
      }
    },
    methods: {
       castingVote (choice) {
         switch(choice){
           case "1": {
             this.active1 = true
             this.active2 = false
             this.active3 = false
             this.active4 = false
             this.active5 = false
           }
           break;
           case "2": {
             {
             this.active1 = false
             this.active2 = true
             this.active3 = false
             this.active4 = false
             this.active5 = false
           }
           }
           break;
           case "3": {
             {
             this.active1 = false
             this.active2 = false
             this.active3 = true
             this.active4 = false
             this.active5 = false
           }
           }
           break;
           case "4": {
             {
             this.active1 = false
             this.active2 = false
             this.active3 = false
             this.active4 = true
             this.active5 = false
           }
           }
           break;
           case "5": {
           {
             this.active1 = false
             this.active2 = false
             this.active3 = false
             this.active4 = false
             this.active5 = true
           }
           }
           break;
           default: console.log(err);
           break
         }
        console.log(choice);
        const myVotingChannel = realtime.channels.get('voting-channel')
        myVotingChannel.publish('vote', choice, (err)=>{
                console.log(err);
                console.log(choice);
            });
      }
    },
    created() {

    },

  }
</script>


