const mongoose = require('mongoose');

const SeaCreatureSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    swimPattern: {
        type: String,
        required: true
    },
    month: {
        type: Array,
        required: true
    },
    hemisphere: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const SeaCreature = mongoose.model('SeaCreatures', SeaCreatureSchema)

module.exports = { SeaCreature };