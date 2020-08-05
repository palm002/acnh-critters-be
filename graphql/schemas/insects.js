const { gql } = require('apollo-server-express')

const typeDefs = gql`
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
    allInsects: (parent, { ids }, context, info) => {
      if (ids) {
        return ids.map((id) => context.Insect.findById(id))
      }
      return context.Insect.find()
    },
    oneInsect: (_, { id }, { Insect }) => Insect.findById(id),
  },
  Mutation: {
    addInsect: (_, args, { Insect }, info) => {
      return Insect.create(args.input)
    },
    addMultipleInsects: (_, { input }, { Insect }, info) => {
      return Insect.insertMany(input)
    },
  },
}

module.exports = { typeDefs, resolvers }
