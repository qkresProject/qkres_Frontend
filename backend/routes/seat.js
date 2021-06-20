const express = require('express');
const router = express.Router();
const Seat = require('../models/seat.model');
router.get('/', async(req,res) => {
    try {
        const seat = await Seat.find();
        res.json(seat);
    } catch (error) {
        res.send('Error ' + error);
    }
});
router.get('/:id', async(req,res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        res.json(seat);
    } catch (error) {
        res.send('Error ' + error);
    }
});

router.post('/post', async (req, res) => {
    
    const seat = new Seat({seat:req.body.seat,slot:req.body.slot,meal:req.body.meal,taken:req.body.taken});
    try {
        const x = await seat.save();    
    } catch (error) {
        res.send('Error ' + error);
    }
});

module.exports = router;

