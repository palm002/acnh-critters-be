const mongoose = require('mongoose');

const FishSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    value: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    },
    seasonality: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const mongooseModel = mongoose.model('Fish', FishSchema, 'fish');

const fishModel = () => ({
    getAll: () => mongooseModel.find(),
});

module.exports = { fishModel };