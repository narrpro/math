<template>
<v-app id="app">

 <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-row justify="center">
    <v-expansion-panels inset focusable class="elevation-2">
      <v-expansion-panel
        v-for="item in items"
        :key="item.text"
      >
        <v-expansion-panel-header class="subtitle-2">
            <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
                {{item.text}}
          </v-expansion-panel-header>
        <v-expansion-panel-content color="blue-grey lighten-5">
          <v-list dense>
            <v-list-item-group >
           <v-list-item
              v-for="subItem in item.subItems"
              :key="subItem.text"
              :to="subItem.to"
              exact
            >
          <v-list-item-content>
            <v-list-item-title  class="caption font-weight-bold">{{subItem.text}}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
          </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>

    </v-navigation-drawer>
    <!-- top menu -->
    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$store.state.user" /> -->
      <v-toolbar-title v-if="$store.state.beforelist.user">
        <v-avatar :size="30">
      <img
        :src="$store.state.beforelist.user.photoURL"
      >
        </v-avatar>
             {{$store.state.beforelist.user.displayName}}님
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
      <v-list color="grey darken-3" dark max-width="500">
        <v-list-item router :to ="{name: 'userprofile'}" exact>
          <v-list-item-title>{{$store.state.beforelist.user.displayName}}님 page</v-list-item-title>
        </v-list-item>
         <v-divider></v-divider>
        <v-list-item @click="signOut" router :to ="{name: 'Home'}" exact>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="my-2">
      <v-btn color="green darken-3" fab x-small dark v-if="!$store.state.beforelist.user"  @click="$router.push({name: 'login'}).catch(err=>{})" exact>
        🔑
      </v-btn>
       </div>
      </div>

    </v-app-bar>
     <!-- cmp  -->
   <v-content>
      <vue-progress-bar></vue-progress-bar>

           <router-view></router-view>
    </v-content>
  <!-- foot -->
      <vfooter/>
</v-app>
</template>

<script>

import vfooter from '@/components/footer'
import store from './store'
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('beforelist')

export default {

  name: 'App',
  components:{
    vfooter
  },
  data: ()=>({
      drawer: false,
      item: 1,
      items: [
        {
          icon: 'mdi-home',
          text: 'home ',
          active: true,
          subItems : [
            {
              text: '나의 페이지',
              to: {path: '/userprofile'},
            },
            {
              text: '사용자보기',
              to: {path: '/users'},
            },
            {
              text: '로그인페이지',
              to: {path: '/login'},
            },
            {
              text: 'test페이지',
              to: {path: '/test'},
            },
          ]
          },
        {
          icon: 'mdi-chart-line',
          text: 'firebase 사용자 ',
          active: false,
          subItems : [
            {
              text: '구글DB연습',
              to: {path: '/CardDB'},
            },
            {
              text: '사용자관리',
              to: {path: '/admin/users'},
            },
            {
              text: 'loading 연습',
              to: {path: '/Mother'},
            },
          ]
          },
        {
          icon: 'mdi-owl',
          text: 'API 연습',
          active: false,
          subItems : [
            {
              text: 'API1 연습',
              to: {path: '/Api-test'},
            },
            {
              text: 'API2 연습',
              to: {path: '/chart'},
            },
          ]
          },
          {
          icon: 'mdi-swap-vertical',
          text: '사용자등급 ',
          active: false,
          subItems : [
            {
              text: 'Admin 연습',
              to: {path: '/Level0'},
            },
            {
              text: 'User 연습',
              to: {path: '/Level1'},
            },
            {
              text: 'Guest 연습',
              to: {path: '/Level2'},
            },
          ]
          },
          {
          icon: 'mdi-filmstrip',
          text: 'News 연습 ',
          active: false,
          subItems : [
            {
              text: 'News',
              to: {path: '/news'},
            },
            {
              text: 'Ask',
              to: {path: '/ask'},
            },
            {
              text: 'Jobs',
              to: {path: '/jobs'},
            },
          ]
          },
        ],
    }),
    computed: {
      ...mapState(['inLogin','inError'])

    },
    methods: {
      // ...mapActions(['getUser']),
      signOut(){
      this.$firebase.auth().signOut()
      this.$store.commit('beforelist/errAction')
      // this.$Progress.start()
      // this.$Progress.increase(30)
      this.$router.push('/')
      }
    },

  }

</script>
