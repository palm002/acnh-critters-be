const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const { Fish } = require('./models/Fish')
const { Insect } = require('./models/Insect')
const { SeaCreature } = require('./models/SeaCreature')
const { typeDefs, resolvers } = require ('./graphql/schemas')

require('dotenv/config');

const url = process.env.DB_CONNECTION

const port = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req) => ({ ...req, Fish, Insect, SeaCreature }) 
});


server.applyMiddleware({ app });

// connect to db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to MongoDB')
);

app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)

// const { makeExecutableSchema } = require('graphql-tools');
// const merge = require('lodash/merge');
// const fishSchema = require('./schemas/fish');
// const insectSchema = require('./schemas/insect');
// const schemas = [fishSchema, insectSchema];
// const merged = schemas.reduce(
//     (acc, { typeDefs, resolvers }) =>
//       ({
//         typeDefs: acc.typeDefs.concat(typeDefs),
//         resolvers: merge(acc.resolvers, resolvers)
//       }),
//     {
//       typeDefs: [],
//       resolvers: {}
//     }
//   );
// const executableSchema = makeExecutableSchema(merged);
// const apolloServer = new ApolloServer({
//         schema: executableSchema,
//         context:...
//         ...
// });