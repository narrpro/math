<template>
  <v-container fluid>
      <v-row no-gutters >
        <v-col v-for="user in $store.state.newslist.users" :key="user.id"
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
      <p> <router-link :to="`/userview/${user.user}`" >{{user.user}}</router-link> </p>
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
import { fetchNewsList } from '@/api/index.js'
import { createNamespacedHelpers} from 'vuex'
const {mapActions} = createNamespacedHelpers('newslist')

  export default {
   created() {
    //  this.$store.dispatch['News/Fetch_News']
     this.$store.dispatch("newslist/Fetch_News")
},

  }
</script>

<style scoped>

</style>