const resolvers = {

  Query: {
    allCreatures: (_, { ids }, context) => {
      if (ids) {
        return ids.map((id) => context.SeaCreature.findById(id))
      }
      return context.SeaCreature.find()
    },
    oneCreature: (_, { id }, { SeaCreature }) => SeaCreature.findById(id),
  },
  Mutation: {
    addSeaCreature: (_, args, { SeaCreature }) => {
      return SeaCreature.create(args.input)
    },
    addMultipleSeaCreatures: (_, { input }, { SeaCreature }) => {
      return SeaCreature.insertMany(input)
    },
  },
  SeaCreature: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = resolvers
