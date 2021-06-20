const { timeStamp } = require('console');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const slotSchema = new Schema({
   Date:
    {
        type:String,
        minlength:0
    },
    slot:
    {
        type:String,
        minlength:0
    },
    taken:
    {
        type: String,
        minlength:0
    }

}, {timeStamps:true});
const Slot = mongoose.model('Slot',slotSchema);
module.exports = Slot;





