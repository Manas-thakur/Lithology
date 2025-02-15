const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  originalname: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  result: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Result",
  },
});

// imageSchema.pre("save", async function(next){

//     return new Promise((resolve, reject) => {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = () => {
//           resolve(fileReader.result)
//         };
//         fileReader.onerror = (error) => {
//           reject(error)
//         }
//       });

// });

const ImageUpload = mongoose.model("ImageUpload", imageSchema);
module.exports = ImageUpload;
