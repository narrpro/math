<template>
<v-item-group>
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
            1번
          </div>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
            1번
          </div>
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
         <div v-if="!active"
            class="display-3 flex-grow-1 text-center">
            2번
          </div>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           2번
          </div>
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
         <div v-if="!active"
            class="display-3 flex-grow-1 text-center">
            3번
          </div>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           3번
          </div>
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
         <div v-if="!active"
            class="display-3 flex-grow-1 text-center">
            4번
          </div>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
           4번
          </div>
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
         <div v-if="!active"
            class="display-3 flex-grow-1 text-center">
            5번
          </div>
           <div v-if="active"
            class="display-3 flex-grow-1 text-center">
            5번
          </div>
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


    </form>


  </v-container>
  </v-item-group>
</template>

<script>

  export default {
    data(){
      return{

      }
    },

  }
</script>


