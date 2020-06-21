const express = require('express');
const app = express();
const mongo = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql/schemas');


require('dotenv/config');

const url = process.env.DB_CONNECTION

const port = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.applyMiddleware({ app });

// connect to db
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to MongoDB')
);

app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)
