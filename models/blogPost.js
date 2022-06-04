const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogPost = new Schema({
    author: {
        type: String,
        required: true
    },
    
})