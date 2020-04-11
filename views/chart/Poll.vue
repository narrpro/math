<template>
  <div class="container">
    <h1>OS Vote</h1>
    <p>Vote for your favorite OS to develop on</p>
    <form id="vote-form">
      <p>
            <input type="radio" name="os" id="windows" value="Windows">
            <label for="windows">Windows</label>
      <p>
            <input type="radio" name="os" id="macos" value="MacOS">
            <label for="macos">MacOS</label>
      <p>
            <input type="radio" name="os" id="linux" value="Linux">
            <label for="linux">Linux Distro</label>
      </p>
      <p>
            <input type="radio" name="os" id="other" value="Other">
            <label for="other">Something else</label>
      </p>
      <v-btn class="mr-4" @click="submit">submit</v-btn>
    </form>

    <br>
</div>


</template>

<script>
// import 'http://code.jquery.com/jquery-3.3.1.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/pusher/4.2.2/pusher.min.js'
// import './main.js'
  export default {
  data () {
        return {

}
      },
  mounted () {

    },
  methods: {

  },
  }

</script>

