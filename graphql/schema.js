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
// const blogPost = require('./models/blogPost').blogPosts; 

const BlogPostType = new GraphQLObjectType({
    name: "BlogPostType",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: {
            type: UserType, resolve(parents, args) {
                return users.find(user => user.id === parent.userId);
            }
        }
    })
});

const UserType = new GraphQLObjectType ({
    name: "UserType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString }
    })
});

// Each field is a type of root query. In other words, all entry points into the Graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: UserType, resolve(parent, args) {
                return users.find(user => user.id === parent.userId);
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createPost: {
            type: BlogPostType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLID) },
                body: { type: new GraphQLNonNull(GraphQLString) },
                author: { type: new GraphQLNonNull(UserType)}
            },

            async resolve(parent, args) {
                const arrLength = items.push(args);
                return items[arrLength - 1];
            }
        }
    }
});

// Initialize and export the schema
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});