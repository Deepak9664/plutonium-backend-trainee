const mongoose = require('mongoose');


const Productschema = new mongoose.Schema( {
    Name: String,
    category:String,
	price: {
        type:Number , 
        required: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('Product',Productschema )