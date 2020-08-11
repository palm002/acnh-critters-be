const { gql } = require('apollo-server-express')

// add months to typedefs
const typeDefs = `
  type Insect {
    _id: ID
    name: String!
    location: String!
    value: Int!
    time: String!
    month: Months!
    image: String!
  }

  input AddInsectInput {
    name: String!
    location: String!
    value: Int!
    time: String!
    month: MonthsInput
    image: String!
  }

  type Query {
    allInsects(ids: [ID]): [Insect]
    oneInsect(id: ID!): Insect
  }

  type Mutation {
    addInsect(input: AddInsectInput): Insect
    addMultipleInsects(input: [AddInsectInput]): [Insect]
  }
`

module.exports = { typeDefs }
