<template>
 <v-container fluid mt-5>
    <v-row justify="center">
      <v-col cols="auto" v-for="(name,index) in names" :key="index">
          <v-chip
            class="align-center tt body-2"
            color="green"
            text-color="black"
            label
            outlined
            small
          >
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
           {{name}}
          </v-chip>
      </v-col>
    </v-row>
    <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <div class="my-2">
            <v-btn color="success" outlined small dark @click="delesocket">
      <v-icon>cast</v-icon> disconnect
            </v-btn>
          </div>
      </v-col>
      <v-col cols="6">
        <div class="my-2">
            <v-btn color="success" outlined small dark>
              <v-icon>touch_app</v-icon> Poll Start
            </v-btn>
          </div>
      </v-col>
    </v-row>
    </v-container>
  </v-container>

</template>

<script>
  export default {
    data() {
      return {
        name: '',
        names: [],
      }
    },
    methods: {
      delesocket() {
         this.$socket.disconnect()
      }
    },
    created() {
     this.$socket.on('chat',(data) => {
       console.log(data);

      // this.name = data.message
      this.names.push(data.name)
       })
    },

  }
</script>

<style scoped>

</style>