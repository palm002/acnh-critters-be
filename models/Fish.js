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
    // time: {
    //     type: Date,
    //     default: Date.now
    // },
    seasonality: {
        type: Boolean,
        // required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Fish = mongoose.model('Fish', FishSchema, 'Fish');

// const createFishModel = () => ({
//     getAll: () => mongooseModel.find(),
// });

// module.exports = { createFishModel };
module.exports = { Fish };