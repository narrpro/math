<template>
   <v-container fluid>
      <v-row no-gutters >
        <v-col v-for="item in ComItems" :key="item.id"
        cols=12
        sm=6
        md=4
        lg=3
        class="pa-2"
        >
<v-card>
    <v-card-text>
      <div>시간:{{item.time_ago}}</div>
      <p class="title text--primary">
        {{item.title}}
      </p>
      <template v-if="UrlName === 'news'">
      <p> <router-link :to="`/newsuser/${item.user}`" >{{item.user}}</router-link> </p>
      </template>
      <template v-else-if="UrlName === 'ask'">
      <p> <router-link :to="`/askuser/${item.id}`" >{{item.title}}</router-link> </p>
        <p>{{item.user}}</p>
      </template>
      <template v-else-if="UrlName === 'jobs'">
      <p> <router-link :to="`/jobsuser/${item.id}`" >시간:{{item.time_ago}}</router-link> </p>
        <p>{{item.user}}</p>
      </template>


      <div class="text--primary">
       {{item.url}}
      </div>
    </v-card-text>

          </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>
import { InfoNewsList, InfoAskList, InfoJobsList  } from '@/api/index.js'
import { createNamespacedHelpers} from 'vuex'
const {mapState } = createNamespacedHelpers('newslist')

  export default {
    data(){
      return{
        UrlName: this.$route.name
      }
    },

  computed:{
    ...mapState(["news","jobs","ask"]),
     ComItems(){
      const name = this.$route.name
      if(name === 'news'){
        return this.$store.state.newslist.news
        } else if(name === 'ask'){
          return this.$store.state.newslist.ask
        } else if(name === 'jobs'){
          return this.$store.state.newslist.jobs
        }
      }
  },
   created() {
    const name = this.$route.name

    if(name === 'news'){
      this.$store.dispatch("newslist/Fetch_News")
    } else if(name === 'ask'){
      this.$store.dispatch("newslist/Fetch_Ask")
    } else if(name === 'jobs'){
       this.$store.dispatch("newslist/Fetch_Jobs")
    }

    },
    methods: {

    },
  }
</script>

<style scoped>

</style>