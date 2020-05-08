const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

// const Vote = require('../models/Vote');

const Pusher = require('pusher');

// const keys = require('../config/keys');

var pusher = new Pusher({
  AppId: '974538',
  Key: '1449c5394e6b77492e22',
  Secret: 'd7a82caf5edd0f1ccd53',
  Cluster: 'ap3',
  Encrypted: true
});

router.get('/', (req, res) => {
  res.send('poll')
  // Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll','os-vote',{
    points: 1,
    os: req.body.os
  });
  return res.json({ success: true, message: "thank!!" });
  // const newVote = {
  //   os: req.body.os,
  //   points: 1
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