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
      <v-toolbar-title>mathq.kr</v-toolbar-title>
       <v-spacer></v-spacer>
      <div class="text-center">
      <v-menu offset-y v-if="isLogin" >
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
        <v-list-item @click="logout">
          <v-list-item-title>로그아웃</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <!-- <v-btn class="ma-2" tile outlined color="white"  v-if="isLogin" router :to ="{name: 'Home'}" exact>
        <v-icon left>mdi-pencil</v-icon>loginout</v-btn> -->
     <v-btn class="ma-2" tile outlined color="white" v-else router :to ="{name: 'login'}" exact>
        <v-icon left>mdi-login</v-icon>로그인</v-btn>
      </div>

    </v-app-bar>



  <!-- cmp  -->
   <v-content>
      <router-view></router-view>
    </v-content>
  <!-- foot -->
      <vfooter/>
</v-app>


</template>

<script>
import vfooter from '@/components/footer'
import { mapState, mapActions} from "vuex"

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
        { icon: 'mdi-chart-bar', text: '통계보기', to: {path: '/'} },
        { icon: 'mdi-filmstrip', text: '자료보기', to: {path: '/'} },

        ],
    }),
    computed: {
      ...mapState(['isLogin'])
    },
    methods: {
      ...mapActions(['logout'])
    },

  };

</script>
