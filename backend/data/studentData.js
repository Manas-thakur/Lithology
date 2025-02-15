const { ObjectId } = require("mongodb");

// const students = [
    //     {
    //         name : "Mukul Dahiya",
    //         rollNo : 24286,
    //         branchName : "AIML-1",
    //         password : "Mukul123"
    //     },
    //     {
    //         name : "gudu",
    //         rollNo : 24251,
    //         branchName : "AIML-1",
    //         password : "gudu123"
    //     },
    //     {
    //         name : "tinku",
    //         rollNo : 24211,
    //         branchName : "CSE-1",
    //         password : "tinku123"
    //     },
    //     {
    //         name : "neha",
    //         rollNo : 24222,
    //         branchName : "CSE-1",
    //         password : "neha123"
    //     },
    //     {
    //         name : "ashu",
    //         rollNo : 24244,
    //         branchName : "AIML-2",
    //         password : "ashu123"
    //     }
    
    // ]



// 
const students = [{
    "name": "Mukul Dahiya",
    "rollNo": 24286,
    "branchName": new ObjectId("63ef71444fbd27e9e76dd472"),
    "password": "Mukul123",
    "role": "student"
  },{
    "name": "gudu",
    "rollNo": 24251,
    "branchName": new ObjectId("63ef71444fbd27e9e76dd472"),
    "password": "gudu123",
    "role": "student"
  },{
    "name": "tinku",
    "rollNo": 24211,
    "branchName": "63ef71444fbd27e9e76dd473",
    "password": "tinku123",
    "role": "student"
  },{
    "name": "neha",
    "rollNo": 24222,
    "branchName": "63ef71444fbd27e9e76dd474",
    "password": "neha123",
    "role": "student"
  },{
    "name": "ashu",
    "rollNo": 24244,
    "branchName": "63ef71444fbd27e9e76dd473",
    "password": "ashu123",
    "role": "student"
  },{
    "name": "yash chabbra",
    "rollNo": 24243,
    "branchName": "63ef71444fbd27e9e76dd475",
    "password": "yash123",
    "role": "student"
  },{
    "name": "admin",
    "rollNo": 10001,
    "branchName": "63ef71444fbd27e9e76dd472",
    "password": "admin123",
    "role": "admin"
  },{
    "name": "admin2",
    "rollNo": 10002,
    "branchName": "63ef71444fbd27e9e76dd472",
    "password": "admin123",
    "role": "admin"
  }]



module.exports = students;