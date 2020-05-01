<template>
  <v-container fluid mt-5>
    <v-row justify="center">
      <v-col cols="auto" v-for="arr in this.arrs" :key="arr.name">
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
           {{arr.name}}
          </v-chip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data:() =>({
        arrs: [],
    }),
    mounted() {
      this.get()
    },
    created() {
    },
    methods: {
      async get() {
      const snapshot = await this.$firebase.firestore().collection('imsi').get()
        this.arrs = [ ]
        snapshot.forEach(v => {
        const { name, number } = v.data()
        this.arrs.push({
        name, number,
          })
        })
        this.$router.push({name: 'daegi'}).catch(err=>{})
      },
    }
  }
</script>
<style scoped>
.tt {
  font-family: Nanum Gothic, Arial, "Helvetica Neue", Helvetica, sans-serif;

}
</style>
