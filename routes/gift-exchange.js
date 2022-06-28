var express = require("express");
const GiftExchange = require("../models/gift-exchange");
const { BadRequestError } = require("../utils/errors.js");

var giftRouter = express.Router();

giftRouter.route("/pairs").post((req, res) => {
  try {
    if (names.body == null) {
      //no body
      return next(new BadRequestError("No body"));
    } else if ((names.body.names = null)) {
      return next(new BadRequestError("No names in body"));
    }
    res = GiftExchange.pairs(req.body.names);
    res.status(200).json({ res });
  } catch (err) {
    return next(new BadRequestError(err));
  }
});

giftRouter.route("/traditional").post((req, res) => {
  try {
    if (names.body == null) {
      //no body
      return next(new BadRequestError("No body"));
    } else if ((names.body.names = null)) {
      return next(new BadRequestError("No names in body"));
    }
    res = GiftExchange.pairs(req.body.names);
    res.status(200).json({ res });
  } catch (err) {
    return next(new BadRequestError(err));
  }
});

module.exports = giftRouter;
