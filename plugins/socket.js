import Vue from 'vue'
import io from 'socket.io-client';
const socket = io();
// import webSocket from 'ws'
// const webSocket = new webSocket('ws://localhost:3000')

Vue.prototype.$socket = socket

// Vue.prototype.$webSocket = webSocket

// export default socket
// export default webSocket
