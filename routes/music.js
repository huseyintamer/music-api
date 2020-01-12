const express = require('express');
const router = express.Router();
const Music = require('../models/Music');


router.get('/top10',(req,res)=>{                                    //TOP10
  const promise = Music.find({}).limit(10).sort({score: -1}); 
  
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
  res.json(err);
  })
  });  

router.get('/',(req,res)=>{                                         //All Songs
const promise = Music.find({});

promise.then((data)=>{
  res.json(data);
}).catch((err)=>{
res.json(err);
})
});


router.get('/between/:start_year/:end_year',(req,res)=>{             //Between
  const {start_year, end_year} = req.params;
  const promise = Music.find({
    year: {"$gte": parseInt(start_year), "$lte": parseInt(end_year)}
  });
  
  promise.then((data)=>{
    res.json(data);
  }).catch((err)=>{
  res.json(err);
  })
  });

router.get('/:music_id',(req, res)=> {                              //Find song
  const promise = Music.findById(req.params.music_id);
  promise.then((music)=>{
    res.json(music);  
  }).catch(()=> {
    res.json({message:'The Song is Not Found',code:0});
  });
});

router.put('/:music_id',(req, res)=> {                              //Update song
  const promise = Music.findByIdAndUpdate(req.params.music_id, req.body, {new: true});
  promise.then((music)=>{
    res.json(music);  
  }).catch(()=> {
    res.json({message:'The Song is Not Found',code:0});
  });
});

router.delete('/:music_id',(req, res)=> {                           //Delete song
  const promise = Music.findByIdAndRemove(req.params.music_id);
  promise.then((music)=>{
    res.json({music,message:'The Song has been is Deleted',code:1});  
  }).catch(()=> {
    res.json({message:'The Song is Deleted',code:1});
  });
});

router.post('/', (req, res) => {                                     //Add song
  const music = new Music(req.body);
 const promise = music.save();

 promise.then((data)=>{
res.json(data);
 }).catch((err)=>{
   res.json(err);
 })
});

module.exports = router;
