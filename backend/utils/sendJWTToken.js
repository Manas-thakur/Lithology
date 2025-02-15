const jsonwebToken = require("jsonwebtoken");
const Cookies = require("universal-cookie");

const generateJWTToken = (user, statusCode, res) => {
  try {
    const token = user.generateJWTToken();
    const options = {
      expires: new Date(
        Date.now() + Number(process.env.COOKIE_EXPIRE) * 24 * 60 * 60 * 1000
      ),
      maxAge: 900000000,
      httpOnly: true, // Security improvement
      secure: process.env.NODE_ENV === 'production', // Security improvement
    };

    res.cookie("token", token, options);
    return res.status(statusCode).json({
      success: true, // Fixed spelling
      message: "Successfully Login", // Fixed spelling
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error generating token",
      error: error.message
    });
  }
};

module.exports = generateJWTToken;
