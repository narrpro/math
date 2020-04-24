<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6>
        <v-text-field v-model="name" label="이름"  color="grey darken-2">
        </v-text-field>
      </v-flex>
      <v-flex xs6>
        <v-text-field v-model="content" label="연구" color="grey darken-2">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs7>
        <v-text-field v-model="addr" label="소속" color="grey darken-2">
        </v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-chip class="ma-2" color="green" text-color="white" @click="post">
          <v-avatar left class="green darken-4"> 🌹 </v-avatar>
          추가
          </v-chip>
      </v-flex>
    </v-layout>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >

      <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="green"
          dark
          flat
          height="30px"
        >
          <v-toolbar-title>Firebase DB 연동연습</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{item.name }}</v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>연구:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.content }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>학교:</v-list-item-content>
                  <v-list-item-content class="align-end">{{item.addr }}
                  </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-chip
                  class="ma-2"
                  color="green"
                  dark
                  @click="put(item.id, item.name, item.addr,item.content)">
                  <v-avatar left class="green darken-4"> 🎁 </v-avatar>
                  수정
                  </v-chip>
                  <v-chip
                  class="ma-2"
                  color="green"
                  dark
                  @click="del(item.id, item.name, item.addr,item.content)">
                  <v-avatar left class="green darken-4"> 🏒 </v-avatar>
                  삭제
                  </v-chip>
                </v-card-actions>

              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

 <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="black--text">page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="black"
                class="ml-2"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4 black--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            x-small
            fab
            dark
            color="green"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            x-small
            fab
            dark
            color="green"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: ()=> ({
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        name: '',
        content: '',
        addr: '',
        items: [],
    }),
    computed: {

      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    mounted() {
      this.get()



    },
    methods: {
       nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      async post(){
        const r = await this.$firebase.firestore().collection('notes').add({
          name: this.name, content: this.content, addr: this.addr
        })
        this.name=''
        this.content = ''
        this.addr= ''
        await this.get()
      },
      async get() {
        const snapshot = await this.$firebase.firestore().collection('notes').get()
        this.items = [ ]
        snapshot.forEach(v => {
          const { name, content, addr} = v.data()
          this.items.push({
            name, content, addr, id: v.id
          })
        })

      },
      async put(id) {
        const r = await this.$firebase.firestore().collection('notes').doc(id).set({
          name: this.name, content: this.content, addr: this.addr
        })
        await this.get()
      },
      async del(id) {
        const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
        await this.get()

      },

    },
  }
</script>