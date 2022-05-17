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
    const winners = await Record.aggregate([{$group: { _id: "$winner", totWins : {$sum: 1}}}]); // group them by using "winner" as key and count the instances
    res.json(winners);
  } catch (err) {
    console.log("pathing worked")
    console.log(err);
  }
}

// shows game records of players name that are present in the game:
async function showRecordById(req, res) {
  try {
    const parameter = req.params.id;
    const record = await Record.find({parameter});
    res.json(record);
  } catch (err) {
    res.send(err + "Player does not exist")
  }
}

//

// async function showWinners(req, res) {
//   const winners = await Record.RecordModel.find({"winner": par});
//   res.json(winners);
// }

module.exports = { showAllRecords, showRecordById, showAllWinners };
