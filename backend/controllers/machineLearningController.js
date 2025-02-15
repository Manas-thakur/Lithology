const catchAsyncError = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const ApiFeatures = require("../utils/ApiFeaturs");
const gernateJWTtoken = require("../utils/sendJWTToken");
const Counter = require("../models/counterModel");
const User = require("../models/userSchema");
const executePython = require("../utils/excutePython");
const axios = require("axios");
const OpenAI = require("openai");
const fs = require("fs");
const ImageUpload = require("../models/imageModel");
const { json } = require("body-parser");
const Result = require("../models/resultModel");

/* With the Help of File */
const rockDetectionController = catchAsyncError(async (req, res) => {
  try {
    const result = await executePython("python/rockDetection.py", [6, 5]);
    res.status(200).json({
      success: true,
      message: "Successfully Rock Identify",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in rock detection",
      error: error.message
    });
  }
});

/* With the Help of Api */
const rockDetectionApi = catchAsyncError(async (req, res) => {
  /* In Case Direct File need to tranfer */

  // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  // encoding: "base64"
  // });

  const image = fs.readFileSync("backend/controllers/download (2).jpeg", {
    encoding: "base64",
  });

  const result = await axios({
    method: "POST",
    url: "https://classify.roboflow.com/rock-life-detection/1",
    params: {
      api_key: "K55NQTRJSzFTBv4mT7VB",
    },
    data: image,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.message);
    });

  console.log(result);

  res.status(200).json({
    success: true,
    message: "Succesfully Rock Identify",
    // result: result,
  });
});

function toBase64(filePath) {
  const img = fs.readFileSync(filePath);

  return Buffer.from(img).toString("base64");
}

/* With the Help of CrackDetection */
const crackDetectionApi = catchAsyncError(async (req, res) => {
  /* In Case Direct File need to tranfer */

  // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  // encoding: "base64"
  // });

  // const image = fs.readFileSync("backend/controllers/download (2).jpeg", {
  // encoding: "base64"
  // });'
  // console.log(req.body.)
  const imageBase64 = req.body.imageBase64;
  // console.log(imageBase64);
  //   console.log("hEEEEEE");
  //   const result = await axios({
  //     method: "POST",
  //     url: "https://detect.roboflow.com/crack-in-rock/1",
  //     params: {
  //         api_key: "K55NQTRJSzFTBv4mT7VB"
  //     },
  //     data: imageBase64,
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //     }
  // })
  console.log("dawdawdaw");
  //   console.log(result);

  const result = await executePython("python/crackDetectionApi.py", [
    imageBase64,
  ]);
  const base64String = toBase64("prediction.jpg");

  const withPrefix = "data:image/png;base64," + base64String;
  // console.log("2137129712");
  // console.log("result  == == " + result)
  const result2 = await executePython("python/crackDetectionApi2.py", [
    imageBase64,
    5,
  ]);

  const base64String2 = toBase64("prediction.jpg");

  const withPrefix2 = "data:image/png;base64," + base64String2;

  console.log("H11111111Eloooooo");

  res.status(200).json({
    success: true,
    message: "Succesfully Rock Identify",
    jsonData: result,
    result: withPrefix,
    result2: withPrefix2,
  });
});

/* With the Help of CrackDetection */
const drillDetection = catchAsyncError(async (req, res) => {
  /* In Case Direct File need to tranfer */

  // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  // encoding: "base64"
  // });

  // const image = fs.readFileSync("backend/controllers/download (2).jpeg", {
  // encoding: "base64"
  // });'
  // console.log(req.body.)

  console.log("drillDetection");
  const imageBase64 = req.body.imageBase64;
  // console.log(imageBase64);
  //   console.log("hEEEEEE");
  //   const result = await axios({
  //     method: "POST",
  //     url: "https://detect.roboflow.com/crack-in-rock/1",
  //     params: {
  //         api_key: "K55NQTRJSzFTBv4mT7VB"
  //     },
  //     data: imageBase64,
  //     headers: {
  //         "Content-Type": "application/x-www-form-urlencoded"
  //     }
  // })
  console.log("dRILLL dECTION");
  //   console.log(result);

  const result = await executePython("python/drillDetection.py", [
    imageBase64,
    5,
  ]);
  const base64String = toBase64("prediction.jpg");

  const withPrefix = "data:image/png;base64," + base64String;
  // console.log("2137129712");
  // console.log("result  == == " + result)
  // const result2 = await executePython("python/crackDetectionApi2.py", [imageBase64, 5]);

  // const base64String2 = toBase64('prediction.jpg');

  // const withPrefix2 = 'data:image/png;base64,' + base64String2;

  // console.log("H11111111Eloooooo");

  res.status(200).json({
    success: true,
    message: "Succesfully Rock Identify",
    jsonData: result,
    result: withPrefix,
  });
});

// const openai = new OpenAI();

const detailAboutImage = catchAsyncError(async (req, res) => {
  console.log("Detail About Image ......");
  console.log(req.body.imageBase64.text);
  const openai = new OpenAI({
    apiKey: "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",
  });
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: req.body.imageBase64.text },
          {
            type: "image_base64",
            image_base64: req.body.imageBase64.imageDetails,
          },
        ],
      },
    ],
  });

  console.log("Responses....");
  console.log(response.choices[0]);

  res.status(200).json({
    success: true,
    message: "Succesfully Rock Identify",
    text: response,
  });
});

function convertStringToArrayOfObjects(inputString) {
  inputString = inputString.slice(
    inputString.indexOf("[") + 1,
    inputString.lastIndexOf("]")
  );

  // console.log(inputString)
  let jsonString = "[" + inputString + "]";

  // Step 2: Replace single quotes with double quotes
  // Be careful with this step - it assumes no single quotes inside the values
  jsonString = jsonString.replace(/'/g, '"');

  // Step 3: Replace None with null
  jsonString = jsonString.replace(/\bNone\b/g, "null");

  try {
    // Parse the string into an array of objects
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
}

const crackDetectionImage = catchAsyncError(async (req, res) => {
  const imageId = req.body.imageId || req.params._id;

  const image = await ImageUpload.findById(imageId);

  const imagePath = image.path.replace(/\\/g, "/");

  const resultImagePath =
    "backend/image/result/" +
    imagePath.split("/").pop().split(".")[0] +
    "_predication.png";

  const response = await executePython("python/crackDetectionApi.py", [
    imagePath,
    "backend/image/result/",
    imagePath.split("/").pop().split(".")[0],
  ]);

  // const response = "\rloading Roboflow workspace...\r\n\rloading Roboflow project...\r\nbackend/image/result/1704194360060_download (3)_predication.png\r\n{'predictions': [{'x': 96.5, 'y': 62.0, 'width': 21.0, 'height': 4.0, 'confidence': 0.5267751216888428, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 10.0, 'y': 90.0, 'width': 16.0, 'height': 8.0, 'confidence': 0.45473629236221313, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 143.0, 'y': 40.5, 'width': 40.0, 'height': 17.0, 'confidence': 0.44767215847969055, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 243.5, 'y': 152.0, 'width': 19.0, 'height': 6.0, 'confidence': 0.4164227843284607, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 137.5, 'y': 28.0, 'width': 9.0, 'height': 4.0, 'confidence': 0.41600462794303894, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}], 'image': {'width': '313', 'height': '161'}}\r\n"

  const result = convertStringToArrayOfObjects(response);

  // const parseData = JSON.parse(result);

  // console.log(response.split("\r\n").)

  // console.log(response.slice(response.indexOf('['),response.lastIndexOf(']')))

  if (!result) {
    res.status(400).json({
      success: false,
      message: "Failed to Get Predication || Try out with another image",
      error: response,
    });
  }

  const cleanedData = result.map((item) => {
    const {
      class_confidence,
      class_id,
      tracker_id,
      image_path,
      prediction_type,
      ...cleanedItem
    } = item;
    return cleanedItem;
  });

  const resultImage = await Result.create({
    user: req.user._id,
    prediction: cleanedData,
    resultImagePath: resultImagePath,
    orgImage: image._id,
  });
  await resultImage.save();

  await ImageUpload.findByIdAndUpdate(imageId, { result: resultImage._id });

  res.status(200).json({
    success: true,
    result: result,
    resultImage: resultImage.resultImagePath,
  });
});

const lithologyDetectionImage = catchAsyncError(async (req, res) => {
  const imageId = req.body.imageId || req.params._id;

  const image = await ImageUpload.findById(imageId);

  const imagePath = image.path.replace(/\\/g, "/");

  const resultImagePath =
    "backend/image/result/" +
    imagePath.split("/").pop().split(".")[0] +
    "_predication.png";

  const response = await executePython("machineLearning/Lithology/yolo.py", [
    imagePath,
    "backend/image/result/",
    imagePath.split("/").pop().split(".")[0],
  ]);

  // const response = "\rloading Roboflow workspace...\r\n\rloading Roboflow project...\r\nbackend/image/result/1704194360060_download (3)_predication.png\r\n{'predictions': [{'x': 96.5, 'y': 62.0, 'width': 21.0, 'height': 4.0, 'confidence': 0.5267751216888428, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 10.0, 'y': 90.0, 'width': 16.0, 'height': 8.0, 'confidence': 0.45473629236221313, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 143.0, 'y': 40.5, 'width': 40.0, 'height': 17.0, 'confidence': 0.44767215847969055, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 243.5, 'y': 152.0, 'width': 19.0, 'height': 6.0, 'confidence': 0.4164227843284607, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 137.5, 'y': 28.0, 'width': 9.0, 'height': 4.0, 'confidence': 0.41600462794303894, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}], 'image': {'width': '313', 'height': '161'}}\r\n"

  const result = convertStringToArrayOfObjects(response);

  // const parseData = JSON.parse(result);

  // console.log(response.split("\r\n").)

  // console.log(response.slice(response.indexOf('['),response.lastIndexOf(']')))

  // if (!result) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Failed to Get Predication || Try out with another image",
  //     result: response,
  //   });
  // }
  if (!result) {
    error = "Failed to Get Predication || Try out with another image";
  }

  const cleanedData =
    result &&
    result.map((item) => {
      const {
        class_confidence,
        class_id,
        tracker_id,
        image_path,
        prediction_type,
        ...cleanedItem
      } = item;
      return cleanedItem;
    });

  const resultImage = await Result.create({
    user: req.user._id,
    prediction: cleanedData ? cleanedData : [{ x: 0, y: 0, confidence: 0 }],
    description: response,
    resultImagePath: resultImagePath ? resultImagePath : "Not Result Image",
    orgImage: image._id,
  });

  await resultImage.save();

  await ImageUpload.findByIdAndUpdate(imageId, { result: resultImage._id });

  res.status(200).json({
    success: true,
    result: result,
    orgResponse: response,
    resultImage: resultImage.resultImagePath,
    messageError: error,
  });
});

const crackImageMlModel = catchAsyncError(async (req, res) => {
  const imageId = req.body.imageId || req.params._id;

  const image = await ImageUpload.findById(imageId);

  const imagePath = image.path.replace(/\\/g, "/");

  const resultImagePath =
    "backend/image/result/" +
    imagePath.split("/").pop().split(".")[0] +
    "_predication.png";

  const response = await executePython("machineLearning/Crack/crack.py", [
    imagePath,
    "backend/image/result/",
    imagePath.split("/").pop().split(".")[0],
  ]);

  // const response = "\rloading Roboflow workspace...\r\n\rloading Roboflow project...\r\nbackend/image/result/1704194360060_download (3)_predication.png\r\n{'predictions': [{'x': 96.5, 'y': 62.0, 'width': 21.0, 'height': 4.0, 'confidence': 0.5267751216888428, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 10.0, 'y': 90.0, 'width': 16.0, 'height': 8.0, 'confidence': 0.45473629236221313, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 143.0, 'y': 40.5, 'width': 40.0, 'height': 17.0, 'confidence': 0.44767215847969055, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 243.5, 'y': 152.0, 'width': 19.0, 'height': 6.0, 'confidence': 0.4164227843284607, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 137.5, 'y': 28.0, 'width': 9.0, 'height': 4.0, 'confidence': 0.41600462794303894, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}], 'image': {'width': '313', 'height': '161'}}\r\n"

  const result = convertStringToArrayOfObjects(response);

  // const parseData = JSON.parse(result);

  // console.log(response.split("\r\n").)

  // console.log(response.slice(response.indexOf('['),response.lastIndexOf(']')))

  // if (!result) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Failed to Get Predication || Try out with another image",
  //     result: response,
  //   });
  // }
  if (!result) {
    error = "Failed to Get Predication || Try out with another image";
  }

  const cleanedData =
    result &&
    result.map((item) => {
      const {
        class_confidence,
        class_id,
        tracker_id,
        image_path,
        prediction_type,
        ...cleanedItem
      } = item;
      return cleanedItem;
    });

  const resultImage = await Result.create({
    user: req.user._id,
    prediction: cleanedData ? cleanedData : [{ x: 0, y: 0, confidence: 0 }],
    description: response,
    resultImagePath: resultImagePath ? resultImagePath : "Not Result Image",
    orgImage: image._id,
  });

  await resultImage.save();

  await ImageUpload.findByIdAndUpdate(imageId, { result: resultImage._id });

  res.status(200).json({
    success: true,
    result: result,
    orgResponse: response,
    resultImage: resultImage.resultImagePath,
    messageError: error,
  });
});

const rockClassification = catchAsyncError(async (req, res) => {
  const imageId = req.body.imageId || req.params._id;

  const image = await ImageUpload.findById(imageId);

  const imagePath = image.path.replace(/\\/g, "/");

  const resultImagePath =
    "backend/image/result/" +
    imagePath.split("/").pop().split(".")[0] +
    "_predication.png";

  const response = await executePython("python/rockIdentify.py", [
    imagePath,
    "backend/image/result/",
    imagePath.split("/").pop().split(".")[0],
  ]);

  // const response = "\rloading Roboflow workspace...\r\n\rloading Roboflow project...\r\nbackend/image/result/1704194360060_download (3)_predication.png\r\n{'predictions': [{'x': 96.5, 'y': 62.0, 'width': 21.0, 'height': 4.0, 'confidence': 0.5267751216888428, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 10.0, 'y': 90.0, 'width': 16.0, 'height': 8.0, 'confidence': 0.45473629236221313, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 143.0, 'y': 40.5, 'width': 40.0, 'height': 17.0, 'confidence': 0.44767215847969055, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 243.5, 'y': 152.0, 'width': 19.0, 'height': 6.0, 'confidence': 0.4164227843284607, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 137.5, 'y': 28.0, 'width': 9.0, 'height': 4.0, 'confidence': 0.41600462794303894, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}], 'image': {'width': '313', 'height': '161'}}\r\n"

  const result = convertStringToArrayOfObjects(response);

  // const parseData = JSON.parse(result);

  // console.log(response.split("\r\n").)

  // console.log(response.slice(response.indexOf('['),response.lastIndexOf(']')))

  // if (!result) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Failed to Get Predication || Try out with another image",
  //     result: response,
  //   });
  // }
  let error = "";
  if (!result) {
    error = "Failed to Get Predication || Try out with another image";
    console.log(error);
  }

  // const cleanedData =
  //   result &&
  //   result.map((item) => {
  //     const {
  //       class_confidence,
  //       class_id,
  //       tracker_id,
  //       image_path,
  //       prediction_type,
  //       ...cleanedItem
  //     } = item;
  //     return cleanedItem;
  //   });

  // const resultImage = await Result.create({
  //   user: req.user._id,
  //   prediction: cleanedData ? cleanedData : [{ x: 0, y: 0, confidence: 0 }],
  //   description: response,
  //   resultImagePath: resultImagePath ? resultImagePath : "Not Result Image",
  //   orgImage: image._id,
  // });

  // await resultImage.save();

  // await ImageUpload.findByIdAndUpdate(imageId, { result: resultImage._id });

  res.status(200).json({
    success: true,
    result: result,
    orgResponse: response,
    // resultImage: resultImage.resultImagePath,
    messageError: error,
  });
});

const mineralClassification = catchAsyncError(async (req, res) => {
  const imageId = req.body.imageId || req.params._id;

  const image = await ImageUpload.findById(imageId);

  const imagePath = image.path.replace(/\\/g, "/");

  const resultImagePath =
    "backend/image/result/" +
    imagePath.split("/").pop().split(".")[0] +
    "_predication.png";

  const response = await executePython("python/mineralClassification.py", [
    imagePath,
    "backend/image/result/",
    imagePath.split("/").pop().split(".")[0],
  ]);

  // const response = "\rloading Roboflow workspace...\r\n\rloading Roboflow project...\r\nbackend/image/result/1704194360060_download (3)_predication.png\r\n{'predictions': [{'x': 96.5, 'y': 62.0, 'width': 21.0, 'height': 4.0, 'confidence': 0.5267751216888428, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 10.0, 'y': 90.0, 'width': 16.0, 'height': 8.0, 'confidence': 0.45473629236221313, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 143.0, 'y': 40.5, 'width': 40.0, 'height': 17.0, 'confidence': 0.44767215847969055, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 243.5, 'y': 152.0, 'width': 19.0, 'height': 6.0, 'confidence': 0.4164227843284607, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}, {'x': 137.5, 'y': 28.0, 'width': 9.0, 'height': 4.0, 'confidence': 0.41600462794303894, 'class': 'fracture', 'class_confidence': None, 'class_id': 0, 'tracker_id': None, 'image_path': 'backend/public/Images/1704194360060_download (3).jpeg', 'prediction_type': 'ObjectDetectionModel'}], 'image': {'width': '313', 'height': '161'}}\r\n"

  const result = convertStringToArrayOfObjects(response);

  // const parseData = JSON.parse(result);

  // console.log(response.split("\r\n").)

  // console.log(response.slice(response.indexOf('['),response.lastIndexOf(']')))

  // if (!result) {
  //   res.status(400).json({
  //     success: false,
  //     message: "Failed to Get Predication || Try out with another image",
  //     result: response,
  //   });
  // }
  console.log(response)
  let error = "";
  if (!result) {
    error = "Failed to Get Predication || Try out with another image";
    console.log(error);
  }

  // const cleanedData =
  //   result &&
  //   result.map((item) => {
  //     const {
  //       class_confidence,
  //       class_id,
  //       tracker_id,
  //       image_path,
  //       prediction_type,
  //       ...cleanedItem
  //     } = item;
  //     return cleanedItem;
  //   });

  // const resultImage = await Result.create({
  //   user: req.user._id,
  //   prediction: cleanedData ? cleanedData : [{ x: 0, y: 0, confidence: 0 }],
  //   description: response,
  //   resultImagePath: resultImagePath ? resultImagePath : "Not Result Image",
  //   orgImage: image._id,
  // });

  // await resultImage.save();

  // await ImageUpload.findByIdAndUpdate(imageId, { result: resultImage._id });

  res.status(200).json({
    success: true,
    result: result,
    orgResponse: response,
    // resultImage: resultImage.resultImagePath,
    messageError: error,
  });
});

module.exports = {
  rockDetectionController,
  rockDetectionApi,
  crackDetectionApi,
  detailAboutImage,
  drillDetection,
  crackDetectionImage,
  lithologyDetectionImage,
  crackImageMlModel,
  rockClassification,
  mineralClassification,
};
