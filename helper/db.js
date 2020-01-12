const mongoose = require('mongoose');
module.exports=() => {
mongoose.connect('mongodb+srv://dbUser:123sql34@cluster0-hwblj.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;
};