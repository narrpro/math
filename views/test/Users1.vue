<template>
  <v-layout
    row wrap pt-5 text-center
    style="max-width:400px; margin:0 auto;"
  >
    <v-flex xs12>
      <h1>Users</h1>
      <p>검색 핀 번호는?</p>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="userId"
        label="검색 핀 번호를 입력하세요."
      ></v-text-field>

        <v-btn class="ma-2" tile outlined color="black"
        @click="$router.push({
          name: 'userstest',
          params: {id:userId}
          }) "><v-icon left>mdi-pencil</v-icon>검색</v-btn>

      </v-flex>
    <v-flex xs12>
      <router-view></router-view>
    </v-flex>
  </v-layout>

</template>

<script>
export default {
  data(){
    return{
      userId: null
    }
  }

}
</script>