
const mongoose = require('mongoose');

let sitesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    profile: {
        type: String
    }
}, { timestamps: true });

module.exports = { sitesSchema }



