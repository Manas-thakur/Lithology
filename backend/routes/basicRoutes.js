const express = require("express");

const router = express.Router();


router
  .route("/meesage1")
  .get(getTestMessage);