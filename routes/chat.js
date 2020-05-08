var express = require('express');
const app = express();
var http = require('http').createServer(app)
var io = require('socket.io')(http)
var router = express.Router();
var socket_io = require('socket.io');
var io = new socket_io();
// var io = socket_io();
var socketApi = {};

socketApi.io = io;

/* GET users listing. */
router.get('/', function(req, res, next) {
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat', (data)=> {
      console.log('message=',data);
       var rtnMessage = {
         message: data
       }
       /* 나를 제외한 모두에게 보내기 */
    // socket.emit('chat',data)
    socket.broadcast.emit('chat',data)
  });
});
  res.send('respond with a resource.');
});

router.post('/', function(req, res, next){
  io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('chat', (data)=> {
      console.log('message=',data);
       var rtnMessage = {
         message: data
       }
  // res.io.on('chat', data)
  res.send('send compelete..0508')
})
  })
})

    // io.on('connection', (socket)=>{
    //   console.log('a user connected');
    //   socket.on('chat', (data)=> {
    //     console.log('message=',data);
    //      var rtnMessage = {
    //        message: data
    //      }
    //      /* 나를 제외한 모두에게 보내기 */
    //   // socket.emit('chat',data)
    //   socket.broadcast.emit('chat',data)
    // });
    // })
module.exports = router;

