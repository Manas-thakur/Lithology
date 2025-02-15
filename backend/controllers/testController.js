const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/ApiFeaturs");
const gernateJWTtoken = require("../utils/sendJWTToken");

/* Get Test Message  */
const getTestMessage = catchAsyncError(async (req, res) => {

  console.log("Last Controller.....")
  console.log("Test Message");
  const { data } = req.body;
  const basValue = req.query.bas;
  console.log('Received data:', data);
  console.log(req.query)
    res.status(200).json({
      success : true,
      message : "Its working fine."
    });

});

module.exports = {
    getTestMessage
  };
  