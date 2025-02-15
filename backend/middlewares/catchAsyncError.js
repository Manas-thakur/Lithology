const catchAsyncError = recivedFunction => (req,res,next) => {
    Promise.resolve(recivedFunction(req,res,next)).catch(next);
};

module.exports = catchAsyncError;


/* Simple UnderStanding */
// const catchAsyncError = (functionRecived) => async(req, res, next) => {
//   try {
//     await functionRecived(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = catchAsyncError;