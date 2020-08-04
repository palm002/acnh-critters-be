const mongoose = require('mongoose');

const FishSchema = mongoose.Schema({
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

const Fish = mongoose.model('Fish', FishSchema);

module.exports = { Fish };