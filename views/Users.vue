<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs6>
        <allUsers></allUsers>
      </v-flex>
      <v-flex xs6>
        <signUp></signUp>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import allUsers from '@/components/Users/AllUsers'
  import signUp from '@/components/Users/SignUp'

  export default {
    components: {
      allUsers,
      signUp
    },
  }

</script>