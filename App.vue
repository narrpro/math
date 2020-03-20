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
      <v-btn class="ma-2" tile outlined color="white"  v-if="isLogin" router :to ="{name: 'Home'}">
        <v-icon left>mdi-pencil</v-icon>loginout</v-btn>
      <v-btn class="ma-2" tile outlined color="white" v-else router :to ="{name: 'login'}">
        <v-icon left>mdi-pencil</v-icon>login</v-btn>
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
        { icon: 'mdi-rss-box', text: '초기화면 ', to: {path: '/'} },
        { icon: 'mdi-chart-line', text: '초기화면 ', to: {path: '/'} },
        { icon: 'mdi-owl', text: '초기화면 ', to: {path: '/'} },
        { icon: 'mdi-login', text: '초기화면 ', to: {path: '/'} },
        { icon: 'mdi-chart-bar', text: '초기화면 ', to: {path: '/'} },
        { icon: 'mdi-filmstrip', text: '초기화면 ', to: {path: '/'} },

        ],
    }),
    computed: {
      ...mapState(['isLogin'])
    },

  };

</script>
