<template>
  <v-card>
    <v-card-title primary-title>
      사용자 관리
    </v-card-title>
    <v-card-text>
      <v-data-table
      :headers="headers"
      :items="desserts"
      :options.sync="options"
      :server-items-length="totalDesserts"
      :loading="loading"
      class="elevation-1"
      >
      </v-data-table>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-bint @click="list">user list</v-bint>
      </v-card-actions>

  </v-card>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    async list(){
      const r = await this.$axios.get('/admin/users')
    }
  }

}
</script>