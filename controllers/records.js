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

// shows game records by id:
async function showRecordById(req, res) {
  try {
    const record = await Record.findById({ _id: req.params.id });
    res.json(record);
  } catch (err) {
    console.log(err);
  }
}

// shows all winners:
async function showAllWinners(req, res) {
  try {
    const winners = await Record.find({}).select("winners");
    res.json(winners);
  } catch (err) {
    console.log(err);
  }
}

//

// async function showWinners(req, res) {
//   const winners = await Record.RecordModel.find({"winner": par});
//   res.json(winners);
// }

module.exports = { showAllRecords, showRecordById, showAllWinners };
