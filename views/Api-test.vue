<template>
<div>
<v-container pa-5 fluid grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm6 md3>

      <v-card class="mx-auto" outlined >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">api 연습</div>
              <v-list-item-title class="headline mb-1">getMd</v-list-item-title>
              <v-textarea v-model='getMd'></v-textarea>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text outlined @click="getReq">Api불러오기</v-btn>
          </v-card-actions>
        </v-card>
    </v-flex>

     <v-flex xs12 sm6 md3>
      <v-card class="mx-auto" outlined >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">api 연습</div>
              <v-list-item-title class="headline mb-1">postMd</v-list-item-title>
              <v-textarea v-model='postMd'></v-textarea>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text outlined @click="postReq">Api불러오기</v-btn>
          </v-card-actions>
        </v-card>
         </v-flex>

         <v-flex xs12 sm6 md3>
      <v-card class="mx-auto" outlined >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">api 연습</div>
              <v-list-item-title class="headline mb-1">putMd</v-list-item-title>
              <v-textarea v-model='putMd'></v-textarea>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text outlined @click="putReq">Api불러오기</v-btn>
          </v-card-actions>
        </v-card>
         </v-flex>

          <v-flex xs12 sm6 md3>
      <v-card class="mx-auto" outlined >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">api 연습</div>
              <v-list-item-title class="headline mb-1">deltMd</v-list-item-title>
              <v-textarea v-model='delMd'></v-textarea>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions>
            <v-btn text outlined @click="delReq">Api불러오기</v-btn>
          </v-card-actions>
        </v-card>
         </v-flex>
</v-layout>
</v-container>


</div>

</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      getMd:'',
      postMd:'',
      putMd:'',
      delMd:''
    }
  },
  mounted() {

  },
  methods: {
    getReq(){
      axios.get('http://localhost:3000/api/user').then((r)=>{
      this.getMd = JSON.stringify(r.data)
    })
    .catch((e)=>{
      console.error(e.message)
    })
    },
    postReq(){
      axios.post('http://localhost:3000/api/user').then((r)=>{
      this.postMd = JSON.stringify(r.data)
    })
    .catch((e)=>{
      console.error(e.message)
    })
    },
    putReq(){
      axios.put('http://localhost:3000/api/user').then((r)=>{
      this.putMd = JSON.stringify(r.data)
    })
    .catch((e)=>{
      console.error(e.message)
    })
    },
    delReq(){
      axios.delete('http://localhost:3000/api/user').then((r)=>{
      this.delMd = JSON.stringify(r.data)
    })
    .catch((e)=>{
      console.error(e.message)
    })
    },

  },
}
</script>