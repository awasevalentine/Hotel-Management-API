require('dotenv').config();
const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost/Hotel_Management_db';
module.exports =function() {
    
return new Promise((resolve, reject)=>{
    try{
        if(process.env.NODE_ENV == 'production'){
            db = mongoose.connect(process.env.MONGODB_URL);
        } else {
            db = mongoose.connect(dbUri , (err)=>{
                if(err){
                    throw new Error(`failed to connect to db`);
                }
            });
        }
       
    } catch(err) {
        reject(err);
    }
    
    mongoose.connection.on('connected', (err)=>{
    if(err){
        reject(`coonection failed, with error reasons: ${err}`);
    } else {
        resolve(`connected successfully`);
    }
});
mongoose.connection.on('disconnected',(err)=>{
    if(err){
        reject(err);
    } else {
        resolve(`db disconnected`);
    }
});
})
};