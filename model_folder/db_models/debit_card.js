import * as mongoose from 'mongoose';
const schema = mongoose.Schema;

const cardDetails = new schema({
    cardNo: {
        type:Number,
        required: true
    },
    expiryDate:{
        type: Date,
        required: true
    },
    securityNo:{
        type: Number,
        required: true
    },
    pin:{
        type: Number
    }
});
mongoose.model('DebitCard', cardDetails);