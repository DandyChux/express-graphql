const blogPost = require('../models/blogPost');

module.exports = {
    posts: async() => {
        try {
            const postsFetched = await blogPost.find()
            return postsFetched.map(post => {
                return {
                    ...post._doc,
                    _id: post.id,
                    createdAt: new Date(post._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    post: async (_id) => {
        try {
            const postFetched = await blogPost.findById(_id);
            return {
                ...postFetched._doc,
                _id: postFetched.id,
                createdAt: new Date(postFetched._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    createPost: async args => {
        try {
            const { body } = args.post;
            const post = new blogPost ({
                body,
            });
            const newPost = await post.save();
            return { ...newPost._doc, _id: newPost.id }
        } catch (error) {
            throw error
        }
    },

    deletePost: async (id) => {
        try {
            const deletedPost = await blogPost.findByIdAndDelete(id);
            return {
                ...deletedPost._doc,
                _id: deletedPost.id,
                createdAt: new Date(deletedPost._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    updatePost: async args => {
        try {
            const { _id, body } = args;
            const updatedPost = await blogPost.findByIdAndUpdate(_id, { body: body });
            return `blogPost ${updatedPost.id} updated Sucessfully!!!`
        } catch (error) {
            throw error
        }
    },
}