const mongoose = require('mongoose');
module.exports=() => {
mongoose.connect('mongodb://musicapi:123sql34@ds041506.mlab.com:41506/heroku_thnvrqf3');
mongoose.Promise = global.Promise;
};