const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    group_id: Schema.Types.ObjectId,            //Eşleştirme yapmak için objectId olarak tanımlandı
title:{
    type: String,
    required: true
},
category: String,
country: String,
year: Number,
score: Number,
date:{
    type: Date,
    default: Date.now                           //Eklenme tarihi - şuan
}
});

module.exports = mongoose.model('music', MusicSchema);