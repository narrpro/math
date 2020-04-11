<template>
<v-container grid-list-md fluid>
  <v-card>
    <v-toolbar
    dark
    color = "teal"
    >
    <v-toolbar-title>사용자</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-autocomplete
      v-model="email"
      :loading ="loadingSearch"
      :items = "emails"
      :search-input.sync = "search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label = "email을 입력하세요."
      solo-inverted
      clearable
    >

    </v-autocomplete>
        </v-toolbar>
    <v-card-text>
      <v-data-table
      :headers="headers"
      :items="items"
      :options.sync="options"
      :server-items-length="totalCount"
      :item-per-page="7"
      :loading="loading"
      must-sort
      class="elevation-1"
      >
      </v-data-table>
    </v-card-text>
    <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="list">검 색</v-btn>
      </v-card-actions> -->
  </v-card>
</v-container>

</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return{
      headers: [
        {
          text: '유저키',
          value: 'uid',
        },
        { text: 'email', value: 'email' },
        { text: '이름', value: 'displayName' },
        { text: 'picture', value: 'photoURL' },

      ],
        items: [],
      totalCount: 0,
        loading: false,
        options: {
          sortBy: ['email'],
          sortDesc: [false]
        },
      search: '',
      emails: [],
      email: null,
      loadingSearch: false

    }
  },
  watch: {
    options: {
      handler(){
        this.list()
      },
      deep: true
    },

    search(val){
      val && val !== this.select && this.searchEmails(val)
     },
    email(n,o){
      if(n !==o) this.list()
    }
   },
  methods: {
    async list(){
      this.loading = true
      const r = await this.$axios.get('/admin/users',{
        params:{
          offset: this.options.page >0 ?(this.options.page -1)* this.options.itemsPerPage : 0,
          limit: this.options.itemsPerPage,
          order: this.options.sortBy[0],
          sort: this.options.sortDesc[0] ? 'desc' : 'asc',
          search: this.email
        }
      })
      this.totalCount = r.data.totalCount
      this.items = r.data.items
      this.loading = false
    },
    searchEmails: _.debounce(
      function(val){
        this.loadingSearch = true

        this.$axios.get('/admin/search', {
          params: {search: this.search}
        })
        .then(({data})=>{
          this.emails = data
        })
        .catch(e=>{
          this.$toasted.global.error(e.message)
        })
        .finally(()=>{
          this.loadingSearch = false
        })
  },
      500
    )
  }

}
</script>

