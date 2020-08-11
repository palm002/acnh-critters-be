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

module.exports = typeDefs 
