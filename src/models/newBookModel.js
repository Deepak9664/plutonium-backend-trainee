const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newAuthor"
    }, 
    publisher:{
        type:ObjectId,
        ref:"newPublisher"
    },
    price: Number,
    ratings: Number,
    // isHardcover:{type:Boolean , default:false}


}, { timestamps: true });


module.exports = mongoose.model('newBooks', bookSchema)