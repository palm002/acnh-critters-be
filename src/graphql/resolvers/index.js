const { mergeResolvers } = require('@graphql-tools/merge')

const fishResolvers = require('./fish')
const insectResolvers = require('./insects')
const seaCreatureResolvers = require('./seaCreatures')

const mergedResolver = mergeResolvers([
  fishResolvers,
  insectResolvers,
  seaCreatureResolvers,
])

module.exports = { mergedResolver }
