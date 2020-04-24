<template>
 <v-card
    class="mx-auto mt-2"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title v-if="UrlName === 'newsuser'">{{newsusers.created}}</v-card-title>
      <v-card-title v-if="UrlName === 'askuser'">{{askusers.id}}</v-card-title>
      <v-card-title v-if="UrlName === 'jobsuser'">{{jobsusers.domain}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0" v-if="UrlName === 'newsuser'">Number {{newsusers.karma}}</v-card-subtitle>
    <v-list-item-subtitle v-if="UrlName === 'askuser'" v-html="askusers.content"> </v-list-item-subtitle>
        <v-list-item-subtitle v-if="UrlName === 'askuser'">조회수: {{askusers.comments_count}}</v-list-item-subtitle>
    <v-card-subtitle class="pb-0" v-if="UrlName === 'jobsuser'">Number {{jobsusers.karma}}</v-card-subtitle>

        <v-list-item-subtitle v-if="UrlName === 'jobsuser'">{{jobsusers.url}}</v-list-item-subtitle>
        <v-list-item-subtitle v-if="UrlName === 'jobsuser'">주소: {{jobsusers.domain}}</v-list-item-subtitle>
        <v-list-item-subtitle v-if="UrlName === 'jobsuser'">조회수: {{jobsusers.id}}</v-list-item-subtitle>

    <v-card-text class="text--primary" v-if="UrlName === 'newsuser'">
      <div>아이디:{{newsusers.id}}</div>

      <div>{{newsusers.created_time}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        @click="$router.go(-1)"
      >

        돌아가기
      </v-btn>
    </v-card-actions>
      </v-card>
</template>
<script>
import {  Infonewsuser, Infoaskuser, Infojobsuser  } from '@/api/index.js'
import { createNamespacedHelpers} from 'vuex'
const {mapState } = createNamespacedHelpers('newslist')

export default {
  data(){
      return{
        UrlName: this.$route.name
      }
    },
  computed:{
    ...mapState(["newsusers", "jobsusers", "askusers"]),
    ComItems(){
      const name = this.$route.name
      if(name === 'newsuser'){
        return this.$store.state.newslist.news
        } else if(name === 'askuser'){
          return this.$store.state.newslist.ask
        } else if(name === 'jobsuser'){
          return this.$store.state.newslist.jobs
        }
      }
    },
    created() {
      const name = this.$route.name
    if(name === 'newsuser'){
      let username = this.$route.params.id
      this.$store.dispatch("newslist/Fetch_newsUser",username)
    } else if(name === 'askuser'){
      let username = this.$route.params.id
      this.$store.dispatch("newslist/Fetch_askUser",username)
    } else if(name === 'jobsuser'){
      let username = this.$route.params.id
       this.$store.dispatch("newslist/Fetch_jobsUser",username)
    }

    }
  }
</script>