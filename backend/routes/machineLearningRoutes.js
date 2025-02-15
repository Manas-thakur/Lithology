const express = require("express");
const {
  rockDetectionController,
  rockDetectionApi,
  crackDetectionApi,
  detailAboutImage,
  drillDetection,
  crackDetectionImage,
  lithologyDetectionImage,
  crackImageMlModel,
  mineralClassification,
  rockClassification,
} = require("../controllers/machineLearningController");
const { isAuthorization } = require("../middlewares/authMiddleware");
// const { createNewUser } = require("../controllers/userController");

const router = express.Router();

router.post("/crackImage/:_id", isAuthorization, crackDetectionImage);

router.post("/lithology/:_id", isAuthorization, lithologyDetectionImage);

router.post("/crack/:_id", isAuthorization, crackImageMlModel);

router.post("/mineral/:_id", isAuthorization, mineralClassification);

router.post("/rock/:_id", isAuthorization, rockClassification);

router.route("/rockClassification").post(rockDetectionController);

router.route("/rockDetectionApi").post(rockDetectionApi);

router.route("/crackDetectionApi").post(crackDetectionApi);

router.route("/imageDetail").post(detailAboutImage);

router.route("/drillDetection").post(drillDetection);

module.exports = router;
