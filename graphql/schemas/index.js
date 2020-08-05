const { makeExecutableSchema } = require('graphql-tools')
const merge = require('lodash.merge')
const fishSchema = require('./fish')
const insectSchema = require('./insects')
const seaCreatureSchema = require('./seaCreatures')

const makeSchema = () => {
  const merged = [fishSchema, insectSchema, seaCreatureSchema].reduce(
    (acc, { typeDefs, resolvers }) => ({
      typeDefs: acc.typeDefs.concat(typeDefs),
      resolvers: merge(acc.resolvers, resolvers),
    }),
    {
      typeDefs: [],
      resolvers: {},
    }
  )
  return makeExecutableSchema(merged)
}

module.exports = { makeSchema }
