<template>
<v-item-group  mandatory>
<v-container fluid>
  <v-container>
    <!--  first -->
    <v-row justify="center">
      <v-col md="4">
        <v-item v-slot:default="{ active, toggle }">
        <v-card
         height="120px"
         :color="active ? 'yellow darken-4' : 'green'"
         class="d-flex align-center"
         dark
         @click="toggle"
        >
        <div v-if="!active"
            class="display-3 flex-grow-1 text-center">
            1
          </div>
         <v-scroll-x-transition>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
            1
          </div>
          </v-scroll-x-transition>
        </v-card>
        </v-item>
      </v-col>
      <v-col md="4">
        <v-item v-slot:default="{ active, toggle }">
        <v-card
         height="120px"
         :color="active ? 'yellow darken-4' : 'green'"
         class="d-flex align-center"
         dark
         @click="toggle"
        >
         <v-scroll-x-transition>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           2
          </div>
          </v-scroll-x-transition>
        </v-card>
        </v-item>
      </v-col>
    </v-row>
    <!-- second -->
    <v-row justify="center">
      <v-col md="4">
        <v-item v-slot:default="{ active, toggle }">
        <v-card
         height="120px"
         :color="active ? 'yellow darken-4' : 'green'"
         class="d-flex align-center"
         dark
         @click="toggle"
        >
         <v-scroll-x-transition>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           3
          </div>
          </v-scroll-x-transition>
        </v-card>
        </v-item>
      </v-col>
      <v-col md="4">
        <v-item v-slot:default="{ active, toggle }">
        <v-card
         height="120px"
         :color="active ? 'yellow darken-4' : 'green'"
         class="d-flex align-center"
         dark
         @click="toggle"
        >
         <v-scroll-x-transition>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           4
          </div>
          </v-scroll-x-transition>
        </v-card>
        </v-item>
      </v-col>
    </v-row>
    <!-- third -->
    <v-row justify="center">
      <v-col md="4">
        <v-item v-slot:default="{ active, toggle }">
        <v-card
         height="120px"
         :color="active ? 'yellow darken-4' : 'green'"
         class="d-flex align-center"
         dark
         @click="toggle"
        >
         <v-scroll-x-transition>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
            5
          </div>
          </v-scroll-x-transition>
        </v-card>
        </v-item>
        <!-- <div class="my-2 text-center">
            <v-btn color="success" fab x-large dark class="display-1 font-weight-bold text-align-center">5
            </v-btn>
          </div> -->
      </v-col>
      <v-col md="4">

      </v-col>
    </v-row>
  </v-container>

        <form ref="vote-from" id="vote-form" class="ml-10">


      <input type="submit" value="Vote" class="btn">
    </form>
    {{datadb}}

  </v-container>
  </v-item-group>
</template>

<script>
import axios from 'axios'

  export default {
    data(){
      return{
        datadb: []
      }
    },

  }
</script>


