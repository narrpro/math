<template>
   <v-container fluid>
      <v-row no-gutters >
        <v-col v-for="user in users" :key="user.id"
        cols=12
        sm=6
        md=4
        lg=3
        class="pa-2"
        >
<v-card>
    <v-card-text>
      <div>시간:{{user.time_ago}}</div>
      <p class="title text--primary">
        {{user.title}}
      </p>
      <p>{{user.user}}</p>
      <div class="text--primary">
       {{user.url}}
      </div>
    </v-card-text>
    <!-- <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions> -->
          </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
import {fetchAskList } from '@/api/index.js'

  export default {
    data(){
      return{
        users: []
      }
    },
   created() {

     fetchAskList()
      .then((res)=>{
        console.log(res)
        this.users = res.data
      })
      .catch((err)=>{
        console.log(err)
})

}

  }
</script>

<style scoped>

</style>