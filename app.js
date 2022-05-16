const express = require('express');
const cors = require('cors');
const favicon = require('express-favicon');
const mongoose = require("mongoose");
const RecordModel = require("./models/neweetRecord");

mongoose.connect(
    "mongodb+srv://groupe:wQGCUZ1GQaXMxq2O@cluster0.i0fbn.mongodb.net/Neweet?retryWrites=true&w=majority"
);

const app = express();

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"));

const helloRoutes = require('./routes/helloRoutes');
const rootRoute = require('./routes/rootRoute');

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

//all mongoDB request here

app.get("/records", (req, res) => {
    RecordModel.find({}, (err, result) => {
        try {
            res.json(result);
            res.status(200);
        } catch {
            console.log(err);
            res.status(404).json({ err });
        }
    });
});

// all mongoDB request end here

// 404 page if user naviagtes to endpoint that does not exist
app.use((req, res) => {
    res.status(404).render('404')
})

//exporting
module.exports = app