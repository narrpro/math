<template>
<v-app id="app">

 <v-navigation-drawer
      v-model="drawer"
      app
    >
    <!-- toggle menu -->
      <v-list dense>
        <v-subheader>Teacher-only menu</v-subheader>
          <v-divider inset ></v-divider>
        <v-list-item-group v-model="item">
          <v-list-item
          v-for="(item,i) in items"
          :key="i"
          :to="item.to"
          exact
          >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-divider color="green"></v-divider>
        </v-list-item-group>

      </v-list>




    </v-navigation-drawer>
    <!-- top menu -->
    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-if="inLogin">
<!-- {{$store.state.seturl}} -->
<!-- {{$store.state.user.photoURL}} -->
        <v-avatar>
      <img
        :src="seturl"
      >
        </v-avatar>
      </v-toolbar-title>
      <v-toolbar-title v-else>mathq.kr</v-toolbar-title>
       <v-spacer></v-spacer>
      <div class="text-center">
      <v-menu offset-y v-if="inLogin" >
      <template v-slot:activator="{ on }">
        <v-btn
          color=""
          dark
          flak
          icon
          v-on="on"
        >
          <v-icon>mdi-library-plus</v-icon>
        </v-btn>
      </template>
      <v-list color="grey darken-3" dark >
        <v-list-item router :to ="{name: 'relogin'}" exact>
          <v-list-item-title>마이페이지</v-list-item-title>
        </v-list-item>
        <v-list-item @click="signOut">
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

     <v-btn class="ma-2" tile outlined color="white" v-else  @click="$router.push({name: 'login'}).catch(err=>{})" exact>
        <v-icon left color="black">mdi-gmail</v-icon>로그인</v-btn>
     <!-- <v-btn class="ma-2" tile outlined color="white" v-else router :to ="{name: 'login'}" exact>
        <v-icon left color="black">mdi-gmail</v-icon>구글 로그인</v-btn> -->
      </div>

    </v-app-bar>
     <!-- cmp  -->
   <v-content>
      <vue-progress-bar></vue-progress-bar>
      <v-container grid-list-md>
        <v-layout row wrap align-center justify-center>
          <v-card color="transparent" flat v-if="!$isFirebaseAuth">
            <v-card-text class="text-xs-center">
              <v-progress-circular
                :size="70"
                :width="7"
                color="green"
                indeterminate
              ></v-progress-circular>
            </v-card-text>
            <v-card-text class="text-xs-center">구글clound 처리중입니다..</v-card-text>
          </v-card>
        </v-layout>
      </v-container>
      <router-view></router-view>
    </v-content>
  <!-- foot -->
      <vfooter/>
</v-app>
</template>

<script>

import vfooter from '@/components/footer'
import store from './store'
import { mapState} from "vuex"

export default {
  name: 'App',
  components:{
    vfooter
  },
  data: ()=>({
      drawer: false,
      item: 1,
      items: [
        { icon: 'mdi-home', text: 'home ', to: {path: '/'} },
        { icon: 'mdi-open-in-new', text: 'about ', to: {path: '/about'} },
        { icon: 'mdi-pencil', text: 'test ', to: {path: '/test'} },
        { icon: 'mdi-help-circle', text: 'users ', to: {path: '/users'} },
        { icon: 'mdi-rss-box', text: '로그인', to: {path: '/login'} },
        { icon: 'mdi-chart-line', text: 'My페이지 ', to: {path: '/relogin'} },
        { icon: 'mdi-owl', text: '연습카드 ', to: {path: '/test0317'} },
        { icon: 'mdi-login', text: 'API연습' , to: {path: '/Api-test'} },
        { icon: 'mdi-chart-bar', text: 'firebase DB', to: {path: '/CardDB'} },
        { icon: 'mdi-filmstrip', text: 'loading 연습', to: {path: '/Mother'} },

        ],

    }),
    computed: {
      ...mapState(['inLogin','seturl'])
    },
    methods: {
      // ...mapActions(['getUser']),

      signOut(){
      this.$firebase.auth().signOut()
      this.$store.commit('errAction')
      this.$Progress.start()
      this.$Progress.increase(30)
      }
    },

  }

</script>
