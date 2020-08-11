const resolvers = {
  Query: {
    allInsects: (_, { ids }, { Insect }) => {
      if (ids) {
        return ids.map((id) => Insect.findById(id))
      }
      return Insect.find()
    },
    oneInsect: (_, { id }, { Insect }) => Insect.findById(id),
  },
  Mutation: {
    addInsect: (_, { input }, { Insect }) => {
      return Insect.create(input)
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
