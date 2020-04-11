<template>
<v-app id="app">

 <v-navigation-drawer
      v-model="drawer"
      app
      v-if="$store.state.user"
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
          <!-- <v-divider color="green" v-show="i === 5"></v-divider> -->
        </v-list-item-group>

      </v-list>




    </v-navigation-drawer>
    <!-- top menu -->
    <v-app-bar
      app
      color="green"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$store.state.user" />
      <v-toolbar-title v-if="$store.state.user">
        <v-avatar :size="30">
      <img
        :src="$store.state.user.photoURL"
      >
        </v-avatar>
             {{$store.state.user.displayName}}님
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
          <v-list-item-title>{{$store.state.user.displayName}}님 page</v-list-item-title>
        </v-list-item>
         <v-divider></v-divider>
        <v-list-item @click="signOut" router :to ="{name: 'Home'}" exact>
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <div class="my-2">
      <v-btn color="green darken-3" fab x-small dark v-if="!$store.state.user"  @click="$router.push({name: 'login'}).catch(err=>{})" exact>
        🔑
      </v-btn>
       </div>
      </div>

    </v-app-bar>
     <!-- cmp  -->
   <v-content>
      <vue-progress-bar></vue-progress-bar>
      <!-- <v-container grid-list-md v-if="!$store.state.user">
        <v-layout row wrap align-center justify-center>
          <v-card color="transparent" flat>
            <v-card-text class="text-center">
              <v-progress-circular
              indeterminate
              color="primary"
              >
              </v-progress-circular>
            </v-card-text>
            <v-card-text class="text-center">
              인증 상태를 기다리는 중.......
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container> -->
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
        { icon: 'mdi-open-in-new', text: '나의 페이지 ', to: {path: '/userprofile'} },
        { icon: 'mdi-pencil', text: 'test ', to: {path: '/test'} },
        { icon: 'mdi-help-circle', text: 'users ', to: {path: '/users'} },
        { icon: 'mdi-rss-box', text: '로그인', to: {path: '/login'} },
        { icon: 'mdi-chart-line', text: '사용자관리', to: {path: '/admin/users'} },
        { icon: 'mdi-swap-vertical', text: '-------------------------------------', },
        { icon: 'mdi-owl', text: '연습카드 ', to: {path: '/test0317'} },
        { icon: 'mdi-login', text: 'API연습' , to: {path: '/Api-test'} },
        { icon: 'mdi-chart-bar', text: 'firebase DB', to: {path: '/CardDB'} },
        { icon: 'mdi-filmstrip', text: 'loading 연습', to: {path: '/Mother'} },
        { icon: 'mdi-cast-connected', text: 'API2 연습', to: {path: '/chart'} },
        { icon: 'mdi-cast-connected', text: 'Admin 연습', to: {path: '/Level0'} },
        { icon: 'mdi-swap-vertical', text: '-------------------------------------', },
        { icon: 'mdi-cast-connected', text: 'User 연습', to: {path: '/Level1'} },
        { icon: 'mdi-cast-connected', text: 'Guest 연습', to: {path: '/Level2'} },

        ],


    }),
    computed: {
      ...mapState(['inLogin','inError'])

    },
    methods: {
      // ...mapActions(['getUser']),
      signOut(){
      this.$firebase.auth().signOut()
      this.$store.commit('errAction')
      // this.$Progress.start()
      // this.$Progress.increase(30)
      this.$router.push('/')
      }
    },

  }

</script>
