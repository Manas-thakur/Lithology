const express = require("express");
// const { rockDetectionController, rockDetectionApi } = require("../controllers/machineLearningController");
// const { createNewUser } = require("../controllers/userController");

const router = express.Router();

router
  .route("/rockClassification")
  .post(rockDetectionController);

router
  .route("/rockDetectionApi")
  .post(rockDetectionApi);

  


module.exports = router;