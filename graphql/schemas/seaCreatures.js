const { gql } = require('apollo-server-express')

// add months to typedefs
const typeDefs = `
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

  type Query {
    allCreatures(ids: [ID]): [SeaCreature]
    oneCreature(id: ID!): SeaCreature
  }

  type Mutation {
    addSeaCreature(input: AddSeaCreatureInput): SeaCreature
    addMultipleSeaCreatures(input: [AddSeaCreatureInput]): [SeaCreature]
  }
`

module.exports = { typeDefs }
