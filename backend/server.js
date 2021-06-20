const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://doc:doc@cluster0.axubv.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const slotrouter = require('./routes/slots');


app.use('/slots', slotrouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.use(express.static(path.join(__dirname, '../')));












