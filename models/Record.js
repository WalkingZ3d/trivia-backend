const mongoose = require("mongoose");

//the schema is completely optional
//this is here as essential information for a game

const RecordSchema = new mongoose.Schema(
  {
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
    player_list: {
      player1: {
        name: {
          type: String,
        },
        points: {
          type: Number,
        },
      },
      player2: {
        name: {
          type: String,
        },
        points: {
          type: Number,
        },
      },
    },
    game_info: {
      turn_01: {},
      turn_02: {},
      turn_03: {},
      turn_04: {},
    },
  },
  {
    strict: false,
    versionKey: false,
  }
);

//strict false: puts the whole schema non strict so whatever can be passed
//versioneKey false: prevents "__v" from being created

module.exports = mongoose.model("Record", RecordSchema);
