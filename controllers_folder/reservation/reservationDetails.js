require('dotenv').config();
const ReservationModel = require('../../model_folder/db_models/reservation_details');
const nodemailer = require('nodemailer');



reservation = (req,res)=>{
    return new Promise((resolve, reject)=>{
        const reservationModel = new ReservationModel({
            title: req.body.title,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            country: req.body.country,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            additionalRequest: req.body.additionalRequest,
            checkInDate: req.body.checkInDate,
            checkOutDate: req.body.checkOutDate,
            roomType: req.body.roomType,
            amountPaid: req.body.amountPaid,
            /*costumerId: req.body.costumerId,
            
            transactionDate: req.body.transactionDate*/
        });
        reservationModel.save((err, doc)=>{
         if(err){
                reject(res.status(400).json(err));
            } else {
                
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    auth:{
                        user: process.env.EMAIL,
                        pass: process.env.PASSWORD
                    }
                });
                
                let mailOptions = {
                    from: 'valentinebassey02@gmail.com',
                    to: `${doc.email}`,
                    subject: 'reservation test',
                    html:`
                            <h3> Hello ${doc.title} ${doc.firstName},</h3>
                            <br>
                            <div style="padding-top: 3em; margin-top: 2em; margin-buttom: 2em;">
                            <p> thanks for making a reservation in our hotel, below is your reservation 
                            details:</p>
                            <br>
                            <p> <b>First Name: ${doc.firstName} </b>
                            <br>
                            </p>
                            <p> <b>Last Name: ${doc.lastName} </b>
                            <br>
                            </p>
                            <p> <b>Email Address: ${doc.email} </b>
                            <br>
                            </p>
                            <p> <b>Phone No: ${doc.phoneNo} </b>
                            <br>
                            </p>
                            <p> <b>Room Type: ${doc.roomType} </b>
                            <br>
                            </p>
                            <p> <b>Check-In Date: ${doc.checkInDate} </b>
                            <br>
                            </p>
                            <p> <b>Check-Out Date: ${doc.checkOutDate} </b>
                            <br>
                            </p>
                            <p> <b>Amount Paid: ${doc.amountPaid} </b>
                            <br>
                            </p>
                            </div>
                    `
                };
                
                transporter.sendMail(mailOptions, function(err, data){
                    if(err){
                        console.log(`Error occured`, err);
                    } else {
                        console.log(`Email sent!!`);
                    }
                });


                resolve(res.status(200).json(doc));
            }
        })
    })

};

const reservationDetail = function (req, res){
    return new Promise((resolve, reject)=>{
    ReservationModel.find((err, doc)=>{
        if(err){
            reject(res.status(301).json(err));
        } else {
            resolve(res.status(200).json(doc));
        }
    })
    })
    
}
const reservationById = function(req, res){
    return new Promise((resolve, reject)=>{
        let id = req.params.id;
        ReservationModel.findById({_id: id}, (err, doc)=>{
            if(err){
                reject(res.status(300).json(err));
            } else { 
                resolve(res.status(200).json(doc));
            }
        })
    })
}
module.exports = {
    reservation,
    reservationDetail,
    reservationById
}