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
 <!-- @click="$router.push({ name: 'show', params: { id: movie.id }})" -->
    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click=""
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
// import axios from 'axios'

export default {
    // created () {

    // axios.get('http://localhost:3000/api/movies')
    // .then((res) => {

    //   this.movies = res.data
    // })
    // .catch((e)=>{
    //   console.error(e.message)
    // })
  // },
  data () {
    return {
      movies: [
        {
        "id": 1,
        "name": "통일^^",
        "year": 2017,
        "director": "김성훈",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg"
    },
    {
        "id": 2,
        "name": "컨택트",
        "year": 1990,
        "director": "NarrPro",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79437/79437_185.jpg"
    },
    {
        "id": 3,
        "name": "왕만 존재하는 정치가들",
        "year": 2011,
        "director": "김영석",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79423/79423_185.jpg"
    },
    {
        "id": 4,
        "name": "힘쎈 교사들",
        "year": 1818,
        "director": "충남교육청",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79316/79316_185.jpg"
    },
    {
        "id": 5,
        "name": "라이언",
        "year": 4444,
        "director": "공주대학교 연수원",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79396/79396_185.jpg"
    },
    {
        "id": 6,
        "name": "넌 누구냐?",
        "year": 2020,
        "director": "학습연구년",
        "poster": "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79313/79313_1000.jpg"
    }
      ]
    }
  }
}
</script>