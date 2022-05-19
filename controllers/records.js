const Record = require("../models/Record");

// shows all the game records:
async function showAllRecords(req, res) {
  try {
    const records = await Record.find();
    res.json(records);
  } catch (err) {
    res.status(404).json("Error 404 (Not found)");
  }
}

// creates new records
async function createRecord(req, res) {
  try {
    const record = req.body;
    const newRecord = new Record(record);
    await newRecord.save();
    res.json(record);
  } catch (err) {
    console.log(err);
  }
}

// shows all the winners and how many times they've won:
async function showAllWinners(req, res) {
  try {
    // group them by using "winner" as key and count the instances
    const winners = await Record.aggregate([
      { $group: { _id: "$winner", totWins: { $sum: 1 } } },
    ]);
    res.json(winners);
  } catch (err) {
    res.send(`Something went wrong, the the following error: ${err}`);
    console.log(err);
  }
}

/* shows the games that the player is in: 
(try to make showRecordById case insensitive when possible) */
async function showRecordById(req, res) {
  try {
    const player = req.params.id;
    const record = await Record.find({ winner: {"$regex": player, "$options": "i"}});
    res.json(record);
  } catch (err) {
    console.log(err);
  }
}

//show all the players and count how many games they have played
async function allPlayers(req, res) {
  try {
    const players = await Record.aggregate([{ $unwind: "$players_list" }, { $group: { _id: "$players_list.name", totGames: { $sum: 1 } } }]);
    res.json(players)
  } catch (err) {
    console.log(err)
  }
}

// show all the games that the player has played
async function showAllGamesById(req, res) {
  try {
    const player = req.params.id;
    const played_games = await Record.find({ players_list: { $elemMatch: { name: {"$regex": player, "$options": "i"} } } });
    res.json(played_games);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  showAllRecords,
  createRecord,
  showRecordById,
  showAllWinners,
  allPlayers,
  showAllGamesById
};
