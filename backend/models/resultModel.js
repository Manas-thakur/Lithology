const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orgImage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ImageUpload",
    unique: true,
    required: true,
  },
  resultImagePath: {
    type: String,
    unique: true,
    required: true,
  },
  prediction: [
    {
      x: {
        type: Number,
        default: 0,
      },
      y: {
        type: Number,
        default: 0,
      },
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      name: {
        type: String,
      },
      class: {
        type: String,
      },
      confidence: {
        type: Number,
        default: 0,
      },
    },
  ],
  // rockInfo: [
  //   {
  //     rock: {
  //       type: String,
  //       default: "SandStone",
  //     },
  //     accuracy: {
  //       type: Number,
  //       default: 0,
  //     },
  //     description: {
  //       type: String,
  //       default: "",
  //     },
  //   },
  // ],
  description: {
    type: String,
    default: "",
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
