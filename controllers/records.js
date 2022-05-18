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

// shows all winners and count how many times they have won:
async function showAllWinners(req, res) {
  try {
    const winners = await Record.aggregate([{ $group: { _id: "$winner", totWins: { $sum: 1 } } }]); // group them by using "winner" as key and count the instances
    res.json(winners);
  } catch (err) {
    res.send(`Something went wrong, the the following error: ${err}`);
    console.log(err);
  }
}

// shows the games that the player is in:
async function showRecordById(req, res) {
  try {
    const player = req.params.id;
    const record = await Record.find({ "winner": player });
    res.json({"The found results for the player": player, "this player has played these games": record})
  } catch (err) {
    console.log(err);
  }
}

//try to make showRecordById case insensitive when possible

// async function showWinners(req, res) {
//   const winners = await Record.RecordModel.find({"winner": par});
//   res.json(winners);
// }

module.exports = { showAllRecords, showRecordById, showAllWinners };