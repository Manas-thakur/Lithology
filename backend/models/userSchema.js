const mongoose = require("mongoose");
const jsonwebToken = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please Enter the Your Name"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

/* Create Json web Token */
userSchema.methods.gernateJWTtoken = function () {
  return jsonwebToken.sign({ userId: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);
module.exports = User;
