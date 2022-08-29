const mongoose = require('mongoose');

 const user1 = new mongoose.Schema( {
    Name: String,
    balance:{
        type:Number , default:100 },
    
   address:"String",
    age:Number,
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    isFreeAppUser:{
        type:Boolean,default:false}
   
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('Userdata', user1) //users