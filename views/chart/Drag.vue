<template>
 <v-item-group class="mt-5">
  <v-container grid-list-xl text-xs-center fluid>
    <v-layout row wrap >

      <v-flex v-for="i in 5" :key="`6${i}`" xs6 sm4 md2
      justify-center
      align-center
      >
         <v-item v-slot:default="{ active, toggle }">
        <v-card
        :color="active ? 'yellow darken-4' : 'green'"
        class="d-flex justify-center align-center mx-auto"
        dark
        height=140
        width=140
        @click="toggle"
        >
       <div
                v-if="!active"
                 class="display-2 text-center"
                >
                  ({{i}})
                </div>
              <v-scroll-x-transition>
                <div
                   v-if="active"
                  class="display-2 text-center"
                >
                  {{i}}번
                </div>
              </v-scroll-x-transition>
        </v-card>
          </v-item>
      </v-flex>
    </v-layout>
  </v-container>
   </v-item-group>
</template>

<script>
export default {

}
</script>