
<template>
  <div>
    <v-container fluid grid-list-md text-center>
        <v-layout row wrap>
          <v-flex xs12>
          <v-card color="transparent" flat>
          <!-- <v-card color="transparent" flat v-if="!$isFirebaseAuth"> -->
            <v-card-text>
              <v-progress-circular
                :rotate="-90"
                :size="97"
                :width="13"
                color="green"
                :value="value"

              >{{ value }}%</v-progress-circular>

              }</v-card-text>
                    <v-card-text>
               <v-avatar :size="80">
      <img
        :src="$store.state.claims.picture"
      >
        </v-avatar>
              구글clound 처리중입니다..</v-card-text>
          </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  data () {
      return {
        interval: {},
        value: 0,

      }
    },
    beforeDestroy () {
      clearInterval(this.interval)
    },
    mounted () {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          return (this.value = 0)
        }
        this.value += 10
      }, 1000*0.9)
    },
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>


