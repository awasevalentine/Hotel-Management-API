const express = require('express');
const reservationCtrl = require('../controllers_folder/reservation/reservationDetails')

const router = express.Router();

router.post('/luxuryReservation', reservationCtrl.reservation);
router.get('/details', reservationCtrl.reservationDetail);
router.get('/details/:id', reservationCtrl.reservationById);

module.exports = router;