const resolvers = {
  Query: {
    allCreatures: (_, { ids }, { SeaCreature }) => {
      if (ids) {
        return ids.map((id) => SeaCreature.findById(id))
      }
      return SeaCreature.find()
    },
    oneCreature: (_, { id }, { SeaCreature }) => SeaCreature.findById(id),
  },
  Mutation: {
    addSeaCreature: (_, { input }, { SeaCreature }) => {
      return SeaCreature.create(input)
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
