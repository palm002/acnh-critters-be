const { ApolloServer, gql } = require('apollo-server-express');
// const { models } = require('mongoose');

// const { createFishModel } = require('../../models')

// const fishModel = createFishModel()

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Fish {
    _id: ID
    name: String
    location: String
    value: Int
    image: String
  }

  # use input type if you have more than 1 arg
  input AddFishInput {
    name: String!
    location: String!
    value: Int!
    image: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  
  # For each Query we must have a Resolver with a matching name
  type Query {
    allFish(ids: [ID]): [Fish]
    oneFish(id: ID!): Fish
  }

  type Mutation {
    addFish(input: AddFishInput): Fish
    addMultipleFish(input: [AddFishInput]): [Fish]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    // put all data/service layer into context, need to bring in this layer to context
    // TODO read parent, args, context, info
    allFish: (parent, { ids }, context, info) => {
      if (ids) {
        // shorthand context.Fish.findById
        return ids.map(id => context.Fish.findById(id))
      }
      return context.Fish.find()},
    oneFish: (_, { id }, { Fish }) => Fish.findById(id),

  },

  Mutation: {
    addFish: (_, args, { Fish }, info) => {
      // const newFish = new Fish(args.input)
      // return newFish.save()
      return Fish.create(args.input)
    },
    addMultipleFish: (_, { input }, { Fish }, info) => {
      return Fish.insertMany(input)
    }
  }
};

module.exports = { typeDefs, resolvers }