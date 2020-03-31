<template>
  <div class="home">
    <FirstStu/>
  </div>
</template>

<script>
// @ is an alias to /src
import FirstStu from '@/components/FirstStu.vue'

export default {
  name: 'Home',
  components: {
    FirstStu
  }
}
</script>
