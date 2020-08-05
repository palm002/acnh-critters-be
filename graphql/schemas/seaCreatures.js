const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type SeaCreature {
    _id: ID
    name: String!
    location: String!
    size: String!
    value: Int!
    swimPattern: String!
    hemisphere: Boolean!
    # month
    image: String!
  }

  input AddSeaCreatureInput {
    name: String!
    location: String!
    size: String!
    value: Int!
    swimPattern: String!
    hemisphere: Boolean!
    # month:
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
    allCreatures: (parent, { ids }, context, info) => {
      if (ids) {
        return ids.map((id) => context.SeaCreature.findById(id))
      }
      return context.SeaCreature.find()
    },
    oneCreature: (_, { id }, { SeaCreature }) => SeaCreature.findById(id),
  },
  Mutation: {
    addSeaCreature: (_, args, { SeaCreature }, info) => {
      return SeaCreature.create(args.input)
    },
    addMultipleSeaCreatures: (_, { input }, { SeaCreature }, info) => {
      return SeaCreature.insertMany(input)
    },
  },
}

module.exports = { typeDefs, resolvers }
