const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Months {
    _id: ID
    north: [Int]
    south: [Int]
  }

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

  input MonthsInput {
    north: [Int!]!
    south: [Int!]!
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

module.exports = typeDefs
