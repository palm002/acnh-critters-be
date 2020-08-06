const mongoose = require('mongoose')

const InsectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  month: {
    north: { type: Array },
    south: { type: Array },
    type: Object,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const Insect = mongoose.model('Insects', InsectSchema)

module.exports = { Insect }
