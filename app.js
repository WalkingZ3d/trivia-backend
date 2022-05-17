const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const mongoose = require("mongoose");
const app = express();
const RecordModel = require("./models/neweetRecord");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    //console.log("Database connected!");
});

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
    res.send("Welcome to Neweet API!")
})

//app.get('*', checkUser); // Middleware that applies to every endpoint

// Routes 
app.use('/api/hello', helloRoutes);
app.use('/api', rootRoute); // Routes 


//MONGODB API REQUEST
app.get("/records", allRecords); //find all the records
//app.get("/records/winners, allWinners") //find the list of winners
//app.get("/records/:id/wins", winnerRoutes) //find the record based on the winner
//app.get("/record/:id", playerRoutes) //find all the record of the player

//MONGODB CREATE NEW GAME RECORDS
app.post("/saveRecord", async (req, res) => {
    const record = req.body;
    const newRecord = new RecordModel.RecordModel(record);
    await newRecord.save();

    res.json(record);
});


// 404 page if user naviagtes to endpoint that does not exist
app.use((req, res) => {
    res.status(404).render('404')
})

//exporting
module.exports = app