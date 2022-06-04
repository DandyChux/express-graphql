const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const { ApolloServer } = require('apollo-server-express');

const url = "mongodb://localhost";

const connect = mongoose.connect(url, { useNewUrlParser: true });
connect.then((db) => {
    console.log('Connected correctly to server!');
}, (err) => {
    console.log(err);
});

const server = new ApolloServer({
    typeDefs: schema.typeDefs,
    resolvers: schema.resolvers
})