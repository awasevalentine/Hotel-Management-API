const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const details_Schema = new Schema({
    title: {
        type: String
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required:true
    },
    phoneNo:{
        type: Number,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        
    },
    additionalRequest:{
        type: String
    },
    checkInDate:{
        type: Date,
        required: true
    },
    checkOutDate:{
        type: Date,
        required: true
    },
    roomType:{
        type: String,
        required: true
    },
    amountPaid:{
        type:Number,
        required: true
    },
    costumerId:{
        type: Number,
        
    },
    transactionDate:{
        type: Date
    }

});
module.exports = mongoose.model('Reservations', details_Schema);