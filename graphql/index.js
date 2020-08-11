const { makeExecutableSchema } = require('graphql-tools')
const merge = require('lodash.merge')
// const fishSchema = require('./schemas/fish')
// const insectSchema = require('./schemas/insects')
// const seaCreatureSchema = require('./schemas/seaCreatures')
const { mergedResolvers } = require('./resolvers')
const { mergedSchema } = require('./schemas')

// TODO move this file up 1 dir
const makeSchema = () => {
  //   const merged = [fishSchema, insectSchema, seaCreatureSchema].reduce(
  //     (acc, { typeDefs,  }) => ({
  //       typeDefs: acc.typeDefs.concat(typeDefs),
  //       resolvers: makeResolvers
  //     }),
  //     {
  //       typeDefs: [],
  //       resolvers: {},
  //     }
  //   )
  //   console.log(merged)
  console.log(mergedSchema)
  return makeExecutableSchema({
    typeDefs: mergedSchema,
    resolvers: mergedResolvers,
  })
}

module.exports = { makeSchema }
