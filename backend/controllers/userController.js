const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/ApiFeaturs");
const jsonwebToken = require("jsonwebtoken");
const gernateJWTtoken = require("../utils/sendJWTToken");
const Counter = require("../models/counterModel");
const User = require("../models/userSchema");
var cookie = require("cookie");
/* Get New User  */
const createNewUser = catchAsyncError(async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { newUserNumber: 1 } },
    { upsert: true, new: true }
  );

  const newUser = await User.create({
    userId: counter.newUserNumber,
    name: req.body.name ? req.body.name : `user ${counter.newUserNumber}`,
  });
  await newUser.save();

  gernateJWTtoken(newUser, 200, res);

  // res.status(200).json({
  //   success: true,
  //   user: newUser,
  //   message: "New User Created Succesfully",
  // });
});

const checkUser = catchAsyncError(async (req, res, next) => {
  // const {tokens} = req.cookies;
  // console.log(req.body);
  // console.log(req.cookies);
  // console.log(req.user);
  const token = req.cookies.token || req.body.token;
  
  // if (!user) {
    //   return res.status(401).json({ success: false, message: "Invalid Token" });
    // }
    console.log(token);
    if(token){
      const { userId } = jsonwebToken.verify(token, process.env.JWT_KEY);
      const user = await User.findById(userId);

      res.status(200).json({
        success: true,
        message: "User is Check and Already Present",
        user: user,
        token
    });
    return;
  }

  const counter = await Counter.findOneAndUpdate(
    {},
    { $inc: { newUserNumber: 1 } },
    { upsert: true, new: true }
  );

  const user = await User.create({
    userId: counter.newUserNumber,
    name: req.body.name ? req.body.name : `user ${counter.newUserNumber}`,
  });
  await user.save();

  gernateJWTtoken(user, 200, res);
});

module.exports = {
  createNewUser,
  checkUser,
};
