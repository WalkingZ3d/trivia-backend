//get all records
const recordSchema = require("../models/neweetRecord");

// function showAllRecords(req, res) {
//     recordSchema.RecordModel.find({}, (err, result) => {
//         try {
//             res.json(result);
//             res.status(200);
//         } catch (err) {
//             console.log(err);
//             res.status(404).json({ err });
//         }
//     });
// }

 async function showAllRecords(req, res) {
    try {
        const records = await recordSchema.RecordModel.find();
        res.json(records);
    } catch (err) {
        res.status(404).json("Error 404 (Not found)");
    }
}

module.exports = { showAllRecords }