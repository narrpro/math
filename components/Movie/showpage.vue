<template>
<v-container pa-5 fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12>
 <v-card
    class="mx-auto"
    max-width="400"

  >
    <v-img
      class="white--text align-end"
      height="200px"
      v-bind:src="movie.poster"
    >
      <v-card-title>상세내용</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number{{movie.id}} </v-card-subtitle>

    <v-card-text class="text--primary">
      <div><strong>Title({{movie.name}})</strong></div>
      <div>{{movie.director}} </div>
      <div>{{movie.year}}작품</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="$router.push({ name: 'chart', params: { id: movie.id }})"
      >
        돌아가기
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
 created: function() {
   var id = this.$route.params.id
   axios.get(`http://localhost:3000/api/movies/${id}`)
   .then(res => { this.movie = res.data[0]; })
    },
  data: function() { return { movie: {} };
   }


}
</script>