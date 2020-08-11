const { makeExecutableSchema } = require('graphql-tools')

const { mergedResolver } = require('./resolvers')
const { mergedSchema } = require('./schemas')

const makeSchema = () => {
  return makeExecutableSchema({
    typeDefs: mergedSchema,
    resolvers: mergedResolver,
  })
}

module.exports = { makeSchema }
