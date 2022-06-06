const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const blogPostSchema = new Schema(
    {
        author: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('blogPost', blogPostSchema);

// var blogPosts = mongoose.model('blogPost', blogPostSchema);
// module.exports = { blogPosts, blogPostSchema };