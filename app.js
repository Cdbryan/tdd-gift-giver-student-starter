const {NotFoundError} = require("./utils/errors.js")

express = require('express')
const app = express ()
const port = 3000
const giftRouter = require("./routes/gift-exchange")

var morgan = require('morgan')
morgan('tiny')

app.use(express.json())
app.use("/gift-exchange", giftRouter)

app.get('/', (req,res) => {
    res.send("hello world")
})

app.get('/health',(req, res) => {
    res.status(200).send({ "ping":"pong"})
})



app.use((error, req, res, next) => {
    return next(new NotFoundError)
})


app.use((error, req, res, next) => {
    if(error.status == null)
    {
        var status = 500
    }
    else
    {
        status = error.status
    }
    if(error.message == null)
    {
        var error =  "Something wen't wrong in the application"
    }
    else 
    {
        message = error.message
    }

    return res.status(status).json({error: {stauts: status, message: message}})
})

module.exports = app
