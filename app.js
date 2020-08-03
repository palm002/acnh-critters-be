const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { Fish } = require('./models/Fish')
const { typeDefs, resolvers } = require ('./graphql/schemas')

require('dotenv/config');

const url = process.env.DB_CONNECTION

const port = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => ({ ...req, Fish }) 
});


server.applyMiddleware({ app });

// connect to db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to MongoDB')
);

app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)
