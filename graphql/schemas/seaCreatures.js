const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type SeaCreature {
    _id: ID
    name: String!
    size: String!
    value: Int!
    swimPattern: String!
    time: String!
    month: Months!
    image: String!
  }

  input AddSeaCreatureInput {
    name: String!
    size: String!
    value: Int!
    swimPattern: String!
    time: String!
    month: MonthsInput
    image: String!
  }

  extend type Query {
    allCreatures(ids: [ID]): [SeaCreature]
    oneCreature(id: ID!): SeaCreature
  }

  extend type Mutation {
    addSeaCreature(input: AddSeaCreatureInput): SeaCreature
    addMultipleSeaCreatures(input: [AddSeaCreatureInput]): [SeaCreature]
  }
`

const resolvers = {
  Query: {
    allCreatures: (_, { ids }, context) => {
      if (ids) {
        return ids.map((id) => context.SeaCreature.findById(id))
      }
      return context.SeaCreature.find()
    },
    oneCreature: (_, { id }, { SeaCreature }) => SeaCreature.findById(id),
  },
  Mutation: {
    addSeaCreature: (_, args, { SeaCreature }) => {
      return SeaCreature.create(args.input)
    },
    addMultipleSeaCreatures: (_, { input }, { SeaCreature }) => {
      return SeaCreature.insertMany(input)
    },
  },
  SeaCreature: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = { typeDefs, resolvers }
