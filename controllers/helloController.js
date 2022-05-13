const Hello = require('../models/Hello');

async function getHello(req, res) {
    try {
        res.send('Hello!')
        res.status(200)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}

module.exports = { getHello }
