const mongoose = require('mongoose');

 const orderschema = new mongoose.Schema( {
    userId: String,
	productId: String,
	amount: Number,
	isFreeAppUser: true, 
	date: String,
    
    isFreeAppUser:Boolean
        
   
    
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('Orders', orderschema)