const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const mongoose = require("mongoose");
const app = express();
const RecordModel = require("./models/neweetRecord");

mongoose.connect(
    "mongodb+srv://groupe:wQGCUZ1GQaXMxq2O@cluster0.i0fbn.mongodb.net/Neweet?retryWrites=true&w=majority"
);

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));

const helloRoutes = require('./routes/helloRoutes');
const rootRoute = require('./routes/rootRoute');
//mongoDB routes
const allRecords = require("./routes/allRecordRoute")

app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/images/favicon.png'));

app.get('/', (req, res) => {
    res.json({
        root_endpoint: "http://localhost:3001/",
    })
})

//app.get('*', checkUser); // Middleware that applies to every endpoint

// Routes 
app.use('/api/hello', helloRoutes);
app.use('/api', rootRoute); // Routes 


//MONGODB API REQUEST
app.get("/records", allRecords); //find all the records
//app.get("/records/winner/:id", winnerRoutes) //find the record based on the winner
//app.get("/record/:id", playerRoutes) //find all the record of the player

//MONGODB CREATE NEW GAME RECORDS
app.post("/saveRecord", async (req, res) => {
    const record = req.body;
    const newRecord = new RecordModel(record);
    await newRecord.save();
});


// 404 page if user naviagtes to endpoint that does not exist
app.use((req, res) => {
    res.status(404).render('404')
})

//exporting
module.exports = app