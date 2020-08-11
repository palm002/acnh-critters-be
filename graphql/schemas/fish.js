const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Months {
    _id: ID
    north: [Int]
    south: [Int]
  }

  type Fish {
    _id: ID
    name: String!
    location: String!
    size: String!
    value: Int!
    time: String!
    month: Months!
    image: String!
  }

  input MonthsInput {
    north: [Int!]!
    south: [Int!]!
  }

  # use input type if you have more than 1 arg
  input AddFishInput {
    name: String!
    location: String!
    size: String!
    value: Int!
    time: String!
    month: MonthsInput
    image: String!
  }

  type Query {
    allFish(ids: [ID]): [Fish]
    oneFish(id: ID!): Fish
  }

  type Mutation {
    addFish(input: AddFishInput): Fish
    addMultipleFish(input: [AddFishInput]): [Fish]
  }
`
// TODO take resolvers out
const resolvers = {
  Query: {
    // put all data/service layer into context, need to bring in this layer to context
    // TODO read parent, args, context, info
    allFish: (parent, { ids }, context, info) => {
      if (ids) {
        // shorthand context.Fish.findById
        return ids.map((id) => context.Fish.findById(id))
      }
      // context.fishService.find
      return context.Fish.find()
    },
    oneFish: (_, { id }, { Fish }) => Fish.findById(id),
  },

  Mutation: {
    addFish: (_, args, { Fish }, info) => {
      return Fish.create(args.input)
    },
    addMultipleFish: (_, { input }, { Fish }, info) => {
      return Fish.insertMany(input)
    },
  },
  Fish: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = { typeDefs, resolvers }
