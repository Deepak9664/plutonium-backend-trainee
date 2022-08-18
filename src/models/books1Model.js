const mongoose = require('mongoose');

const BookssSchema = new mongoose.Schema({
    name:String,
    author_id:Number,
    price:Number,
    ratings:Number,

},  { timestamps: true });

module.exports = mongoose.model('readbooks', BookssSchema)