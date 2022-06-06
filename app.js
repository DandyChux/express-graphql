const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const GraphQLSchema = require("graphql").GraphQLSchema;
const bodyParser = require('body-parser');
const cors = require('cors');

const db_url = "mongodb+srv://cluster0.bluof.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

const connect = mongoose.connect(db_url, { useNewUrlParser: true });
connect.then((db) => {
    console.log('Connected correctly to server!');
}, (err) => {
    console.log(err);
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({}),
    graphiql: true
}));

app.use(bodyParser.json());

app.use('*', cors());

app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
})