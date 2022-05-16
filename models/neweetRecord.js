const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    set_turns: {
        type: Number,
    },
    category: {
        type: String,
    },
    player_number: {
        type: Number,
    },
    winner: {
        type: String,
    },

});

const RecordModel = mongoose.model("neweetRecord", RecordSchema);
module.exports = {RecordModel};