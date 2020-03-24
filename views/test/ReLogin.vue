<template>

  <!-- <h1> {{userInfo.first_name}} 로그인 된 사람 </h1> -->
   <v-carousel height="auto">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../../assets/a1.jpg')
          },
          {
            src: require('../../assets/a2.jpg')
          },
          {
            src: require('../../assets/a3.jpg')
          },
          {
            src: require('../../assets/a4.jpg')
         },
        ],
      }
    },
  }
</script>
