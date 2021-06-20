var express = require('express');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const uri = 'mongodb+srv://mv:mv@cluster0.u0cig.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true ,useUnifiedTopology: true});
const con = mongoose.connection;
con.on('open', function ()
{
    console.log('connected...');
})
const seatrouter = require('./routes/seat');


app.use('/seats', seatrouter);


app.use(express.static(path.join(__dirname, '../')));
app.listen(PORT, function () {
    console.log(`Example app listening at http:${PORT}`);
});






