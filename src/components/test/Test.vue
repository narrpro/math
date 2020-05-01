<template>
  <div id="tt">
   <form id="vote-form">
      <p>
        <label>
            <input type="radio" name="os" id="windows" value="Windows">
            <span for="windows">Windows</span>
        </label>
      <p>
        <label>
            <input type="radio" name="os" id="macos" value="MacOS">
            <span for="macos">MacOS</span>
        </label>
      <p>
        <label>
            <input type="radio" name="os" id="linux" value="Linux">
            <span for="linux">Linux Distro</span>
        </label>
      </p>
      <p>
        <label>
            <input type="radio" name="os" id="other" value="Other">
            <span for="other">Something else</span>
        </label>
      </p>
      <input type="submit" value="Vote" class="btn">
    </form>

    <br>
    <br>
  </div>
</template>
<script>
import axios from 'axios'
import * as Pusher from 'pusher'
  export default {
    data() {
      return {
        messages: []
      }
    },
    created() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://js.pusher.com/5.1/pusher.min.js')
      document.head.appendChild(recaptchaScript)
    },
    mounted() {

    const form = document.getElementById('vote-form');
    var event;

    form.addEventListener('submit', e=>{

    const choice = document.querySelector('input[name=os]:checked').value;
    const data = {os: choice};

      axios('http://localhost:3000/vote',{
        method: 'post',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
         })
         .then( res => res.json())
         .catch(err => console.log(err))
      })
          e.preventDefault();
    //    Pusher.logToConsole = true
    //   var pusher = new Pusher('9bb3eace331b9e1a7559', {
    //   cluster: 'ap3',
    //   forceTLS: true
    //    });
    // var channel = pusher.subscribe('mathtest');
    // channel.bind('my-event', function(data) {
    //   tt.messages.push(JSON.stringify(data));
    // });

    })
    }
  }
</script>

<style scoped>

</style>