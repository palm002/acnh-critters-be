const resolvers = {
  Query: {
    // put all data/service layer into context, need to bring in this layer to context
    // TODO read parent, args, context, info
    allFish: (parent, { ids }, context, info) => {
      if (ids) {
        // shorthand context.Fish.findById
        return ids.map((id) => context.Fish.findById(id))
      }
      // context.fishService.find
      return context.Fish.find()
    },
    oneFish: (_, { id }, { Fish }) => Fish.findById(id),
  },

  Mutation: {
    addFish: (_, args, { Fish }, info) => {
      return Fish.create(args.input)
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
