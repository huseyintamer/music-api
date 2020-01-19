const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({

username: {
    type: String,
    required: true,
    unique: true,
    minlength:2
},

password:{
    type: String,
    required:true,
    minlength: 5

},
date:{
    type: Date,
    default: Date.now                           //Eklenme tarihi - şuan
}
});

module.exports = mongoose.model('users', UsersSchema);