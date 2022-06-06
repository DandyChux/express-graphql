const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLBoolean,
    GraphQLFloat,
    GraphQLNonNull,
    GraphQLList } = graphql;
const blogPost = require('./models/blogPost').blogPosts; 

const BlogPostType = new GraphQLObjectType({
    name: "BlogPost",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString }
    })
});

const userType = new GraphQLObjectType ({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});