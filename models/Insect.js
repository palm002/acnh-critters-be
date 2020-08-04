const mongoose = require('mongoose');

const InsectSchema = mongoose.Schema({
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

const Insect = mongoose.model('Insects', InsectSchema)

module.exports = { Insect };