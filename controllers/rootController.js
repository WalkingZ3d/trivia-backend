async function rootMsg(req, res) {
    try {
        res.json({
            msg: "Hello World!",
            number: "42"
        })
        res.status(200)
    } catch (err) {
        console.log(err)
        res.status(500).json({ err })
    }
}

module.exports = { rootMsg }
