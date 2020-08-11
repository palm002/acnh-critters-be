const resolvers = {
  Query: {
    allInsects: (_, { ids }, context) => {
      if (ids) {
        return ids.map((id) => context.Insect.findById(id))
      }
      return context.Insect.find()
    },
    oneInsect: (_, { id }, { Insect }) => Insect.findById(id),
  },
  Mutation: {
    addInsect: (_, args, { Insect }) => {
      return Insect.create(args.input)
    },
    addMultipleInsects: (_, { input }, { Insect }) => {
      return Insect.insertMany(input)
    },
  },
  Insect: {
    month: ({ _id, month }) => {
      return { _id, ...month }
    },
  },
}

module.exports = resolvers
