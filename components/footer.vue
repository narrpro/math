<template>
 <v-footer
      color="green"
      dark
      app

    >
    <v-col class="text-center" cols="12">
      &#128561;2020년{{ new Date().getMonth()+1 }}월{{ new Date().getDate() }}일...mathQ.kr  by NarrPro
      <!-- &#128561;{{ new Date().getFullYear( year [ , month[ ,day] ] ) }} 2020 mathQ.kr/  Tacheon Middle School  by NarrPro -->
      </v-col>
    </v-footer>

</template>

<script>
  export default {
    name: 'vfooter',

    data: () => ({

    }),
  }
</script>