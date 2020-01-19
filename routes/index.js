const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});


router.post('/register', (req, res, next) => {
  const {username, password} = req.body;
  bcrypt.hash(password, 10).then((hash)=> {


    const users = new Users({
      username,
      password:hash
    });
    
    const promise = users.save();
    promise.then(data=>{
      res.json(data);
    }).catch((err)=>{
      res.json(err);
    })
  
  });
  } 
);

router.post('/login', (req, res)=> {
  const {username, password} = req.body;

  Users.findOne({
    username
  }, (err, user) => {
    
    if(!user) {
      res.json({
        status:false, message:'böyle bir user yok bebek'
      });
    } else {
      bcrypt.compare(password, user.password)
      .then((result)=> {
        if(!result){
          res.json({status: false, message:'şifren hatalı bebek'})
        }
        else {
          const payload = {
            username
          };
          const token = jwt.sign(payload, req.app.get('api_secret_key'),
          {
            expiresIn: 1000
          });

          res.json({
            status:true,
            token:token
          });
        }

      });
    }


  });

});


module.exports = router;
