const app = require('./app'); 

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`http://localhost:${port}`))