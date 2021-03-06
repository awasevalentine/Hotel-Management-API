const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
//const pug = require('pug');
const _ = require('lodash');
const path = require('path');
const {Donor} = require('./delete_later/usermodel');
const {initializePayment, verifyPayment} = require('./delete_later/paystack')(request);

const port = process.env.PORT || 8080;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
//app.use(express.static(path.join(__dirname, ‘public/’)));
//app.set(‘view engine’, pug);

app.post(`/paystack/pay`, (req, res) => {
    const form = _.pick(req.body,['amount','email','full_name']);
    form.metadata = {
        full_name : form.full_name
    }
    form.amount *= 100;
    initializePayment(form, (error, body)=>{
        if(error){
            //handle errors
            console.log(error);
            return;
       }
       response = JSON.parse(body);
       res.redirect(response.data.authorization_url)
    });
});

app.get('/paystack/callback', (req,res) => {
    const ref = req.query.reference;
    verifyPayment(ref, (error,body)=>{
        if(error){
            //handle errors appropriately
            console.log(error)
            return res.redirect('/error');
        }
        response = JSON.parse(body);
        const data = _.at(response.data, ['reference', 'amount','customer.email', 'metadata.full_name']);
        [reference, amount, email, full_name] = data;
        newDonor = {reference, amount, email, full_name}
        const donor = new Donor(newDonor)
        donor.save().then((donor)=>{
            if(donor){
                res.redirect('/receipt/'+donor._id);
            }
        }).catch((e)=>{
            res.redirect('/error');
        })
    })
});
app.listen(port, () => {
console.log(`App running on port ${port}`)
});
