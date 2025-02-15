const express = require("express");
const { createNewUser, checkUser } = require("../controllers/userController");
const { isAuthorization } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/check",checkUser);

router.route("/createUser").post(createNewUser);

router.route("/login").post(createNewUser);
router.route("/password/forgot").post(createNewUser);

module.exports = router;
