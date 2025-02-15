const catchAsyncError = require("./catchAsyncError");


const test1Controller = catchAsyncError(async (req,res,next) => {

    console.log("Controller == Test1");

});