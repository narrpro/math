<template>
<v-container fluid>
      <v-row no-gutters >
        <v-col
        cols=12
        sm=6
        md=4
        lg=3
        class="pa-2"
        >
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{$store.state.newslist.uusers.created}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Number {{$store.state.newslist.uusers.karma}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>아이디:{{$store.state.newslist.uusers.id}}</div>

      <div>{{$store.state.newslist.uusers.created_time}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="$router.push({
          name: 'news',
          }) "
      >
        돌아가기
      </v-btn>
    </v-card-actions>
      </v-card>
     </v-col>
  </v-row>
  </v-container>
</template>

<script>
import { fetchUserInfo } from '@/api/index.js'


export default {
    created() {
      const username = this.$route.params.id
      console.log(this.$route.params.id)
      this.$store.dispatch("newslist/Fetch_User",username)
      // axios.get(`https://api.hnpwa.com/v0/user/${user.name}davideast.json`)
    }
  }
</script>

<style scoped>

</style>