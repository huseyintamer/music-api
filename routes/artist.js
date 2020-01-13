const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Artist = require('../models/Artist');

router.get(('/'),(req, res, next)=>{    //Combine Songs
const promise = Artist.aggregate([
    {
        $lookup: {
            from: 'musics',
            localField: '_id',
            foreignField: 'group_id',
            as: 'musics'


        }
    },
    {
        $unwind:{
            path: '$musics',
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $group:{
            _id:{
                _id: '$_id',
                name: '$name',
                surname: '$surname',
                bio: '$bio',
            },
            musics:{
                $push: '$musics'
            }
        }
    },
    {
        $project:{
            _id: '$_id._id',
            name: '$_id.name',
            surname: '$_id.surname',
            musics: '$musics'
        }
    }

])
promise.then((data)=>{
    res.json(data);
}).catch((err) => {
    res.json(err);
})
});

router.get(('/:group_id'),(req, res, next)=>{            //Find by ID
    const promise = Artist.aggregate([
        {
            $match: {
                '_id':mongoose.Types.ObjectId(req.params.group_id)
            }
        },
        {
            $lookup: {
                from: 'musics',
                localField: '_id',
                foreignField: 'group_id',
                as: 'musics'
    
    
            }
        },
        {
            $unwind:{
                path: '$musics',
                preserveNullAndEmptyArrays: true
            }
        },
        {
            $group:{
                _id:{
                    _id: '$_id',
                    name: '$name',
                    surname: '$surname',
                    bio: '$bio',
                },
                musics:{
                    $push: '$musics'
                }
            }
        },
        {
            $project:{
                _id: '$_id._id',
                name: '$_id.name',
                surname: '$_id.surname',
                bio:'$_id.bio',
                musics: '$musics'
            }
        }
    
    ])
    promise.then((data)=>{
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
    });

router.post('/',(req,res,next)=>{                   //Artist ADD
    const artist = new Artist(req.body);
    const promise = artist.save();
    promise.then((data)=>{
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
})

router.put('/:group_id',(req, res)=> {                              //Update Artist
    const promise = Artist.findByIdAndUpdate(
        req.params.group_id,
        req.body, {new: true});
    promise.then((artist)=>{
      res.json(artist);  
    }).catch(()=> {
      res.json({message:'The Song is Not Found',code:0});
    });
  });

  router.delete('/:group_id',(req, res)=> {                           //Delete Artist
    const promise = Artist.findByIdAndRemove(req.params.group_id);
    promise.then((group)=>{
      res.json({group,message:'The Song has been is Deleted',code:1});  
    }).catch(()=> {
      res.json({message:'The Song is Deleted',code:1});
    });
  });
  
module.exports = router;
