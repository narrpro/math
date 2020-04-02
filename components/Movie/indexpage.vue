<template>
<v-container pa-5 fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm6 md3   v-for="movie in movies" :key="movie.id">
 <v-card
    class="mx-auto"
    max-width="400"

  >
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="movie.poster"
    >
      <v-card-title>Top Good Movie</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number{{movie.id}} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><strong>Title({{movie.name}})</strong></div>
      <div>{{movie.director}}</div>
      <div> [{{movie.year}}]</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="$router.push({ name: 'show', params: { id: movie.id }})"
      >
        더보기
      </v-btn>


    </v-card-actions>
  </v-card>

  </v-flex>
</v-layout>
</v-container>

</template>

<script>
import axios from 'axios'

export default {
    created () {
    axios.get('http://localhost:3000/api/movies')
    .then((res) => {

      this.movies = res.data
    })
    .catch((e)=>{
      console.error(e.message)
    })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>