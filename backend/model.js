const mongoose = require("mongoose");

const prodschema = new mongoose.Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    cost: {
        type: Number,
    }
})

module.exports = mongoose.model("Product", prodschema);