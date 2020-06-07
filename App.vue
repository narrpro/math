<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="title body-2 font-weight-bold"
          >{{ _.get($store.state.user, 'email', '로딩중')}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.subItems" :key="subItem.title" :to="subItem.to">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="green" dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-if="$store.state.user"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>{{ pkg.description }}</span>
        <span class="caption">&nbsp;v{{ pkg.version }}</span>
        <!-- <span class="caption" v-if="env === 'development'">&nbsp;{{ env }}</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="my-2">
        <v-btn
          color="green darken-3"
          fab
          x-small
          dark
          v-if="!$store.state.user"
          @click="$router.push({name: 'sign'}).catch(err=>{})"
          exact
        >🔑</v-btn>
      </div>

      <v-toolbar-items v-if="$store.state.user">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon dark>mdi-content-save-all</v-icon>
              <!-- <v-avatar
                size="32"
              >
                <v-img :src="_.get($store.state.user, 'photoURL', null) ? $store.state.user.photoURL : require('@/assets/images/account-alert.png')" alt="avatar"></v-img>
              </v-avatar>-->
            </v-btn>
          </template>
          <v-card width="320">
            <v-container fluid>
              <v-row>
                <v-col cols="4">
                  <v-avatar size="77" color="indigo">
                    <v-img
                      :src="_.get($store.state.user, 'photoURL', null) ? $store.state.user.photoURL : require('@/assets/images/account-alert.png')"
                      alt="avatar"
                    ></v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <v-card-text>
                    <span class="font-weight-bold">{{$store.state.user.displayName}}</span>
                    <br />
                    <span class="font-weight-thin">{{$store.state.user.email}}</span>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-container>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn small color="success" outlined @click="$router.push('/teacherremote').catch(err => {})">리모콘</v-btn> -->
              <v-btn small color="success" outlined @click="$router.push('/teacher').catch(err => {})">핀번호생성</v-btn>
              <v-btn small color="success" outlined @click="$router.push('/userProfile')">회원정보</v-btn>
              <v-btn small color="success" outlined @click="signOut">로그아웃</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <vue-progress-bar></vue-progress-bar>
      <v-container fluid v-if="!$store.state.firebaseLoaded">
        <v-row align="center" justify="center">
          <v-card color="transparent" flat>
            <v-card-text class="text-center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-card-text>
            <v-card-text class="text-center">인증 상태를 기다리는 중입니다.</v-card-text>
          </v-card>
        </v-row>
      </v-container>
      <router-view />
    </v-content>
    <vfooter />
  </v-app>
</template>

<script>
import pkg from "../package";
import vfooter from "@/components/footer";

export default {
  components: {
    vfooter
  },
  name: "App",
  data() {
    return {
      env: process.env.NODE_ENV,
      pkg: pkg,
      drawer: false,
      items: [
        {
          icon: "mdi-home",
          title: "home",
          active: true,
          subItems: [
            {
              title: "시작하기",
              to: "/"
            }
          ]
        },
        {
          icon: "cast_connected",
          title: "실시간풀이",
          active: false,
          subItems: [
            {
              title: "구글DB연습",
              to: "/CardDB"
            },
            {
              title: "0x문제",
              to: "/test/lv0"
            },
            {
              title: "4지선다형",
              to: "/test/lv1"
            },
            {
              title: "5지선다형",
              to: "/test/lv2"
            }
          ]
        },
        {
          icon: "group_add",
          title: "Admin",
          active: false,
          subItems: [
            {
              title: "회원 관리",
              to: "/admin/users"
            }
          ]
        },
        {
          icon: "tap_and_play",
          title: "실시간 관리 ",
          active: false,
          subItems: [
            {
              title: "News",
              to: "/news"
            },
            {
              title: "Ask",
              to: "/ask"
            },
            {
              title: "Jobs",
              to: "/jobs"
            },
            {
              title: "socket.io",
              to: "/poll"
            },
            {
              title: "실시간공유",
              to: "/p5test"
            },
            {
              title: "서술형풀기",
              to: "/draw"
            },
            {
              title: "DB 이미지공유",
              to: "/imageDB"
            },
          ]
        }
        // en
      ]
    };
  },
  "$store.state.user"(n) {
    if (!n) this.drawer = false;
  },
  methods: {
    async signOut() {
      this.$firebase.auth().signOut();
      this.$router.push("/").catch(err => {});
    }
  }
};
</script>
<style scoped>
#app {
  font-family: "Nanum Gothic", Arial, sans-serif; /* this was it */
}
</style>
