

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.info('Successfully connected to the mongo database');
    })
    .catch(error => {
        console.log(error.message)
    })


