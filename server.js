const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const cookieparser = require('cookie-parser'); 
const mongodb = require('./config_folder/db_config/dbConnection');
const reservationRoute = require('./Route_folder/reservation_details');

const app = express();
const port =process.env.PORT ||3000;
var me = mongodb().then(data=>{
    console.log(data);
});
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({origin: '*'}));
app.use(morgan('dev'));

app.use('/api', reservationRoute);

app.listen(port, ()=>{
    console.log(`server is listening on localhost:${port}`);
})
