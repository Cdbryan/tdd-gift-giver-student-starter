var express = require('express');
var giftRouter = express.Router();

giftRouter.route("/pairs")
 .post((req, res) => {
        // const body = req.params.body
        // console.log(body.names)
        // res.send("hi")
        res.status(200).json({"names": []})
    })

module.exports = giftRouter;
