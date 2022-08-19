const mongoose = require('mongoose');

const Publisher = new mongoose.Schema( {
    author_id: String,
    author_name: String,
    age:Number,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', Publisher)