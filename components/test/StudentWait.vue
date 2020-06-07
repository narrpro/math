<template>
  <div class="text-center">
    <v-progress-circular
      :rotate="-90"
      :size="200"
      :width="40"
      :value="value"
      color="success"
    >
      {{ value }}%
    </v-progress-circular>

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
        this.value += 1
      }, 300)
    },
  }
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}

</style>