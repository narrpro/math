<template>
<div class="test">
<v-container fluid grid-list-md text-center>
  <v-layout row wrap >
  <v-flex xs12>
    <h1>{{title }}화면 연습입니다.</h1>

    <v-chip
      class="ma-2"
      color="green"
      text-color="white"
      @click="test"
    >
    <v-avatar
        left
        class="green darken-4"
      >
        1
      </v-avatar>
      추가
    </v-chip>
<v-chip
      class="ma-2"
      color="green"
      text-color="white"
      @click="adele"
    >
    <v-avatar
        left
        class="green darken-4"
      >
        2
      </v-avatar>
      맨뒤삭제
    </v-chip>
<v-chip
      class="ma-2"
      color="green"
      text-color="white"
      @click="bdele"
    >
    <v-avatar
        left
        class="green darken-4"
      >
        3
      </v-avatar>
      맨앞삭제
    </v-chip>
</v-flex>

    <v-flex xs12 sm6 md4 v-for="tt in tts">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">test_card ^^</div>
            <v-list-item-title class="headline mb-1">{{tt.name}}</v-list-item-title>
            <v-list-item-subtitle>{{tt.num}}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn text>Button</v-btn>
          <v-btn text>Button</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>

  </div>

</template>
<script>

export default {
  name: 'test',
  data () {
    return {
      title: 'test',
      tts: [{

      }  ]
    }
  },
  methods:{
    test(){
      let i =1;
     const tt = {
       name: `narr ${Math.floor(Math.random()*1000000)+100}`
     }
     tt.num = Math.floor(Math.random()*1000000)+100

     this.tts.push(tt)

    },
    bdele (){
      this.tts.shift()
    },
    adele (){
      this.tts.pop()
    }
  }
}
</script>