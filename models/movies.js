const mongoose = require("mongoose");

// official docs
// https://mongoosejs.com/docs/schematypes.html


// movies database
// https://www.thrillist.com/entertainment/nation/best-movies-of-2021

const Movies = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    release_date: {
        type: Date,
        required: true,
        default: Date.now
    },

    director: {
        type: String,
        required: true,
    },

    cast: {
        type: String,
        default: null
    },

    watch_from: {
        type: String,
        default: null
    }
})

module.exports = mongoose.model("Movies", Movies)