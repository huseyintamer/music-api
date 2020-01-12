const express = require('express');
const router = express.Router();
const Music = require('../models/Music');
router.post('/', (req, res, next) => {
  const music = new Music(req.body);
 const promise = music.save();

 promise.then((data)=>{
res.json(data);
 }).catch((err)=>{
   res.json(err);
 })
});

module.exports = router;
