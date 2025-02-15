const express = require("express");
const { getTestMessage } = require("../controllers/testController");

const router = express.Router();

router
  .route("/message1")
  .post(getTestMessage);

module.exports = router;