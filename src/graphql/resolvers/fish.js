const resolvers = {
  Query: {
    allFish: (_, { ids }, { Fish }, info) => {
      if (ids) {
        // shorthand context.Fish.findById
        return ids.map((id) => Fish.findById(id))
      }
      return Fish.find()
    },
    oneFish: (_, { id }, { Fish }) => Fish.findById(id),
  },

  Mutation: {
    addFish: (_, { input }, { Fish }, info) => {
      return Fish.create(input)
    },
    addMultipleFish: (_, { input }, { Fish }, info) => {
      return Fish.insertMany(input)
    },
  },
  Fish: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = resolvers
