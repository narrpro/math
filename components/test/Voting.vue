<template>
  <div class="hello">
    <h1>Welchen Film möchtest du gerne schauen?</h1>
    <ul>
      <li v-for="movie of movies" :key="movie" @click="vote(movie)"
        :style="{'border-color': (movie)}">

        <div :style="{'background-color': (movie)}">
          <span :style="{'color': (movie)}">{{movie}}</span>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import router from '@/router/api'
// import colorForString from '@/color'
// import db from './db'
export default {
  name: 'Voting',
  data () {
    return {
      movies: [
        'The Big Lebovski',
        'Brasil',
        'Inception',
        'Fight Club'
      ],
    }
  },
  mounted() {
    this.get()
  },
  methods: {
    async vote(movie) {
      const r = await this.$firebase.firestore().collection('movies').add({
          one: this.movie
        })
        this.one=''
        await this.get()
        // this.$router.push({name: 'daegi'}).catch(err=>{})
    },
  //   vote (movie) {
  //     db.ref('voting').push(movie)
  //     router.push('/result')
  //   },
  //   colorForString,
  }
}
</script>

<style scoped>
.hello {
  padding: 10px 20px;
}
ul {
  display: inline-block;
  list-style: none;
  padding: 0;
}
li {
  list-style: none;
  cursor: pointer;
  border: 3px solid;
  border-radius: 6px;
  min-width: 50%;
  margin: 5px;
  filter: brightness(80%);
  z-index: 10;
}
li > div {
  filter: brightness(156.25%);
  border-radius: 2px;
  padding: 10px 20px;
}
li > div > span {
  filter: brightness(51.2%);
  font-weight: bold;
}
</style>