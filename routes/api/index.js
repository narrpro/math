const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const mysql = require('mysql2')
const mysqlConfig = require('./mysqlConfig.js')
// import store from '@/store'
// import router from '../router'

  let DB = mysql.createPool(mysqlConfig);

// router.get('/', function(req, res, next) {
//   DB.query('SELECT * FROM info',(error,data) => {
//     if(error) console.log(error)
//     else res.send(data)
//   })
//   DB.end()
// })

router.get('/', function(req, res, next) {
  DB.getConnection( function( err, connection ) {
    if (err) throw err;
    else {
        // 커넥션 사용
      connection.query( "SELECT * FROM info", function( err, results ) {
        if (err) throw err;
          else console.log(results);
          res.send(results)
        })
        // 커넥션 반환 ( 커넥션 종료 메소드가 커넥션과 다르다 )
        connection.release()
    }
  })
})
// router.post('/', (req, res, next) => {
//     res.send({ sucess: true })
// })
// router.put('/', (req, res, next) => {
//     res.send({ sucess: true })
// })
// router.delete('/', (req, res, next) => {
//     res.send({ sucess: true })
// })
router.all('*', function(req, res, next) {
    next(createError(404, '파일이 없습니다.'));
});

module.exports = router;