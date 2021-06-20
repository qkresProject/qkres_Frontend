const { timeStamp } = require('console');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const seatSchema = new Schema({
   seat:
    {
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength:0
    },
    slot:
    {
        type:String,
        minlength:0
    },
    meal:
    {
        type:String,
        minlength:0
            
        },
    taken:
    {
        type: String,
        required: true,
        minlength:0
    }

}, {timeStamps:true});
const Seat = mongoose.model('Seat',seatSchema);
module.exports = Seat;





