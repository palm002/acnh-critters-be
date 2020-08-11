const { mergeTypeDefs } = require('@graphql-tools/merge')

const fishSchema = require('./fish')
const insectSchema = require('./insects')
const seaCreatureSchema = require('./seaCreatures')

const mergedSchema = mergeTypeDefs(
  [fishSchema, insectSchema, seaCreatureSchema],
  { all: true }
)

module.exports = { mergedSchema }
