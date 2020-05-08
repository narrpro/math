const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// const Vote = require('../models/Vote');

const Pusher = require('pusher');

// const keys = require('../config/keys');

var pusher = new Pusher({
  appId: '989740',
  key: '9bb3eace331b9e1a7559',
  secret: '22664bd55e892d31e224',
  cluster: 'ap3',
  useTLS: false,

});
pusher.trigger('mathtest','my-event',{
  message: "thank!!" });

router.get('/', (req, res) => {
  res.send('poll')
  // Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

// router.post('/', (req, res) => {

//   });
router.post('/', (req, res) => {
  pusher.trigger('mathtest','os-vote',{
    points: 1,
    os: ''
    // os: req.body.os
  });
  return res.json({ success: true, message: "thank!!" });
  });

//   new Vote(newVote).save().then(vote => {
//     pusher.trigger('os-poll', 'os-vote', {
//       points: parseInt(vote.points),
//       os: vote.os
//     });

//     return res.json({ success: true, message: 'Thank you for voting' });
//   });
// });

module.exports = router;