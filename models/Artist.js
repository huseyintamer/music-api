const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema({

name: String,
surname: String,
bio: String,
date:{
    type: Date,
    default: Date.now                           //Eklenme tarihi - şuan
}
});

module.exports = mongoose.model('artist', ArtistSchema);