const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogPostSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    
});

var blogPosts = mongoose.model('blogPost', blogPostSchema);
module.exports = {blogPosts, blogPostSchema};