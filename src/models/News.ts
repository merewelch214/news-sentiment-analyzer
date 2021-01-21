const mongoose = require("mongoose")

const NewsSchema = mongoose.Schema({
	source: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    content: {
        type: String,
        required: true
    },
    score: {
        type: Number
    }
})

module.exports = mongoose.model('News', NewsSchema);
