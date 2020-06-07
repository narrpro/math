<template>
  <div>
    <imsi-test :canvas-id2="'canvas-two'" ref="childCanvas2" keepalive="true" hidpi="off"></imsi-test>
  </div>
</template>

<script>
import ImsiTest from '@/components/test/Test.vue'
  export default {
    components: {
      ImsiTest,
    },
     data: () => ({
            buttons: ['Simple', 'Separate', 'Replicated'],
            single: true
        }),
  }
</script>

<style scoped>

</style>