
express = require('express')
const app = express ()
const port = 3000

var morgan = require('morgan')
morgan('tiny')

app.use(express.json())

app.get('/', (req,res) => {
    res.send("hello world")
})

app.get('/health',(req, res) => {
    res.status(200).send({ "ping":"pong"})
})

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})

module.exports = app
