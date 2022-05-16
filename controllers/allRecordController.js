//get all records
const RecordModel = require("../models/neweetRecord");

function showAllRecords(req, res) {
    RecordModel.find({}, (err, result) => {
        try {
            res.json(result);
            res.status(200);
        } catch (err) {
            console.log(err);
            res.status(404).json({ err });
        }
    });
}

module.exports = { showAllRecords }