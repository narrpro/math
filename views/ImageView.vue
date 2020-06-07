<template>
  <div>
    <v-container fluid>
      <v-row align="stretch" justify="center">
        <v-col cols="12" sm="6" md="3" v-for="(image,index) in images" :key="index">
          <v-card
            class="mx-auto"
            max-width="400"
            elevation="5"
            tile
          >
            <v-img
              class="white--text align-end"
              height=""
              :src="`${url}${image}`"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- {{images}} -->
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        url: '/images/',
        images: [],
      }
    },
    created () {
      axios.get('/mygabia')
      .then((r)=>{
        let num = sessionStorage.getItem('room')
        console.log(num);
        console.log(r.data);


        for (let tt in r.data){
          if ( r.data[tt].room == num){
            this.images.push(r.data[tt].filename)
          }
        }

         console.log(this.images);

      })
      .catch((e)=>{
        console.log(e.message);

      })

    },
  }
</script>

<style scoped>

</style>