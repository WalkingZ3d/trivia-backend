const Record = require("../models/Record");

// Method to show all the records:
async function showAllRecords(req, res) {
  try {
    const records = await Record.RecordModel.find();
    res.json(records);
  } catch (err) {
    res.status(404).json("Error 404 (Not found)");
  }
}

module.exports = { showAllRecords };
