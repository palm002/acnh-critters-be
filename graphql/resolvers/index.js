const { mergeResolvers } = require('@graphql-tools/merge');
const fishResolvers = require('./fish')
const insectResolvers = require('./insects')
const seaCreatureResolvers = require('./seaCreatures')

const resolvers = [
    fishResolvers,
    insectResolvers,
    seaCreatureResolvers
]


const mergedResolvers = mergeResolvers(resolvers)

module.exports = { mergedResolvers }
