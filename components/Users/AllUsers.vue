<template>
<div>
  <h1>사용자 목록( {{count}} 명)</h1>
  <h2>공주 사용자 ( {{seouls}} 명..{{percent}}%)  </h2>
  <v-list two-line>
    <v-list-item v-for="(user, index) in allUsers"  :key="index">
        <!-- <v-list-item-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-item-avatar> -->

      <v-list-item-content>
        <v-list-item-title v-html="user.name"></v-list-item-title>
          <v-list-item-subtitle>id:#{{index}} / {{user.address}} 거주</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
  </div>
</template>

<script>
// import { EventBus } from '@/main.js'
import { mapState, mapGetters } from 'vuex'
//getters  별칭 만들기
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters ({
        count: 'allUsersCount',
        seouls: 'countOfSeoul',
        percent: 'percentOfSeoul'
        //이렇게 사용해도 되고요..
      }),
      // ...mapGetters([ 'allUsersCount','countOfSeoul','percentOfSeoul'])
      ...mapState(['allUsers'])
      //$store.state.allUsers 이것을 약칭
    },
    mounted() {
      // EventBus.$on('signUp', users => {
      //   this.$store.state.allUsers.push(users)
      // })
    }
  }
</script>
