const { gql } = require('apollo-server-express')

const typeDefs = gql`
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

  extend type Query {
    allInsects(ids: [ID]): [Insect]
    oneInsect(id: ID!): Insect
  }

  extend type Mutation {
    addInsect(input: AddInsectInput): Insect
    addMultipleInsects(input: [AddInsectInput]): [Insect]
  }
`

const resolvers = {
  Query: {
    allInsects: (_, { ids }, context) => {
      if (ids) {
        return ids.map((id) => context.Insect.findById(id))
      }
      return context.Insect.find()
    },
    oneInsect: (_, { id }, { Insect }) => Insect.findById(id),
  },
  Mutation: {
    addInsect: (_, args, { Insect }) => {
      return Insect.create(args.input)
    },
    addMultipleInsects: (_, { input }, { Insect }) => {
      return Insect.insertMany(input)
    },
  },
  Insect: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = { typeDefs, resolvers }
