<template>
<v-card color="amber">
  <v-container fluid>
      <v-row no-gutters >
        <v-col v-for="i in 8" :key="i"
        cols=12
        sm=6
        md=4
        lg=3
        class="pa-2"
        >
           <v-card
            outlined
            tile
            color=light-green
          >
            Column{{i}}
          </v-card>
          </v-col>
        </v-row>
  </v-container>

</v-card>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>