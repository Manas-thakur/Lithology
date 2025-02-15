const express = require("express");
// const { c } = require("../controllers/userController");
const { addNewImage, getResultImage } = require("../controllers/imageController");
const { isAuthorization } = require("../middlewares/authMiddleware");
/* This Package is used for File Uploading things */
const multer = require("multer");

/* Multer */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "backend/public/Images");
  },   
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

const router = express.Router();

router.route("/new").post(isAuthorization,upload.single("file"), addNewImage);
// router.post("/new",upload.single('file'),addNewImage);


router.route('/result/:_id').get(isAuthorization,getResultImage);

// // router
// //   .route("/addImage")
//   .post(isAuthorization,addNewImage);

module.exports = router;
