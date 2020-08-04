const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
  # This "Fish" type defines the queryable fields for every book in our data source.

  type Fish {
    _id: ID
    name: String!
    location: String!
    size: String!
    value: Int!
    hemisphere: Boolean!
    # month: 
    image: String!
  }

  # use input type if you have more than 1 arg
  input AddFishInput {
    name: String!
    location: String!
    size: String!
    value: Int!
    hemisphere: Boolean!
    # month:
    image: String!
  }

  type Insect {
    _id: ID
    name: String!
    location: String!
    value: Int!
    hemisphere: Boolean!
    # month
    image: String!
  }

  input AddInsectInput {
    name: String!
    location: String!
    value: Int!
    hemisphere: Boolean!
    # month:
    image: String!
  }

  type SeaCreature {
    _id: ID
    name: String!
    location: String!
    value: Int!
    hemisphere: Boolean!
    # month
    image: String!
  }

  input AddSeaCreatureInput {
    name: String!
    location: String!
    value: Int!
    hemisphere: Boolean!
    # month:
    image: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "allFish" query returns an array of zero or more Fish (defined above).
  
  # For each Query we must have a Resolver with a matching name
  type Query {
    allFish(ids: [ID]): [Fish]
    oneFish(id: ID!): Fish
    insects(ids: [ID]): [Insect]
    insect(id: ID!): Insect
    creatures(ids: [ID]): [SeaCreature]
    creature(id: ID!): SeaCreature
  }

  type Mutation {
    addFish(input: AddFishInput): Fish
    addMultipleFish(input: [AddFishInput]): [Fish]
    addInsect(input: AddInsectInput): Insect
    addInsects(input: [AddInsectInput]): [Insect]
    addSeaCreature(input: AddSeaCreatureInput): SeaCreature
    addSeaCreatures(input: [AddSeaCreatureInput]): [SeaCreature]
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
      return context.Fish.find()
    },
    oneFish: (_, { id }, { Fish }) => Fish.findById(id),
    insects: (parent, { ids }, context, info) => {
      if (ids) {
        return ids.map(id => context.Insect.findById(id))
      }
      return context.Insect.find()
    },
    insect: (_, { id }, { Insect }) => Insect.findById(id),
    creatures: (parent, { ids }, context, info) => {
      if (ids) {
        return ids.map(id => context.SeaCreature.findById(id))
      }
      return context.SeaCreature.find()
    },
    creatures: (_, { id }, { SeaCreature }) => SeaCreature.findById(id)
  },

  Mutation: {
    addFish: (_, args, { Fish }, info) => {
      return Fish.create(args.input)
    },
    addMultipleFish: (_, { input }, { Fish }, info) => {
      return Fish.insertMany(input)
    },
    addInsect: (_, args, { Insect }, info) => {
      return Insect.create(args.input)
    },
    addInsects: (_, { input }, { Insect }, info) => {
      return Insect.insertMany(input)
    },
    addSeaCreature: (_, args, { SeaCreature }, info) => {
      return SeaCreature.create(args.input)
    },
    addSeaCreatures: (_, { input }, { SeaCreature }, info) => {
      return SeaCreature.insertMany(input)
    }
  }
};

module.exports = { typeDefs, resolvers }