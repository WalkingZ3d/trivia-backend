const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    set_turns: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    player_number: {
        type: Number,
        required: true,
    },
    winner: {
        type: String,
        required: true,
    },

});

const RecordModel = mongoose.model("neweetRecord", RecordSchema);
module.exports = RecordModel;