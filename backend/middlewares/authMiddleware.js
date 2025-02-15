const jsonwebToken = require("jsonwebtoken");
const catchAsyncError = require("./catchAsyncError");
const User = require("../models/userSchema");

const isAuthorization = catchAsyncError(async (req, res, next) => {
  let token = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") || req.cookies.token
  ) {

    console.log("AuthoRization = " + req.headers.authorization);  
    console.log("Cookies = " + req.cookies.token);
    token = req.headers.authorization ? req.headers.authorization.split(" ")[1] : req.cookies.token;
  }
  console.log(token);

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Please login first" });
  }

  try {
    const decoded = jsonwebToken.verify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWEwMjM0MzlkYWUxMjhiMzdiOTRiNWUiLCJpYXQiOjE3MDQ5OTM2MDMsImV4cCI6MTcwNjI4OTYwM30.QUqjvA_jDzBNnFlwsWGz1APmSBVIMR5eVk2gbqsKVbg",
      process.env.JWT_KEY
    );
    // const decoded = jsonwebToken.verify(
    //   token,
    //   process.env.JWT_KEY
    // );
    // console.log(decoded)
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid Token" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "- SOME ERROR OCCURED -",
      error: error.message,
      errorStack: error.stack,
    });
  }
});

module.exports = { isAuthorization };
