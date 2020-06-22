const mongoose = require('mongoose');

const InsectSchema = mongoose.Schema({
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

const mongooseModel = mongoose.model('Insect', InsectSchema, 'insect');

const insectModel = () => ({
    getAll: () => mongooseModel.find(),
});

module.exports = { insectModel };