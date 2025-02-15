const { ObjectId } = require("mongodb");

// // const teachers = [
// //   {
// //     staff_Id: "472G12D1G",
// //     // staff_Id: 678,
// //     name: "Megha",
// //     password: "Megha@123",
// //     branchTeach: [new ObjectId("63eed1552c585180bab38ac2")],
// //   },
// "$oid": "63ef71444fbd27e9e76dd474",
// "courseTeach": [{
//     staff_Id: "572G12 //     // staff_Id: 689,
// //     name: "Manoj",
// //     password: "Manoj@123",
// //     role: "staff",
// //     branchTeach: [
// //       new Objec
// "$oid": "63ef71444fbd27e9e76dd474",
// "courseTeach": [
//  { //      new ObjectId("63eed1552c585180bab38ac4   tI]2c585180bab38ac1"),
// ],
// //   },
// //   {
// //     staff_Id: "672G12D1G",
// //     // staff_Id: 690,
// //     name: "Ritu pao",
// //     password: "Ritu@123",
// //     role: "staff",
// //     branchTeach: [new ObjectId("63eed1552c585180bab38ac3")],
// //   },
// "$oid": "63ef71444fbd27e9e76dd474",
// "courseTeach": [{
//     staff_Id: "772G12 //     // staff_Id: 691,
// //     name: "Yash Varhdaan",
// //     password: "yash@123",
// //     role: "staff",
// //     branchTeach: [new ObjectId("63eed1552c585180bab38ac1")],
// //   },
// "$oid": "63ef71444fbd27e9e76dd474",
// "courseTeach": [{
//     staff_Id: "872G12 //     // staff_Id: 692,
// //     name: "Aswin",
// //     password: "Aswin@123",
// //     role: "staff",
// //     branchTeach: [
// //       new Objec
// "$oid": "63ef71444fbd27e9e76dd474",
// "courseTeach": [
//  { //      new ObjectId("63eefe48f14d7cfbc76e5af0   tI]2c585180bab38ac1"),
// ],
// //   },
// // ];

const teachers = [
  {
    _id: "63ef69011329ffd0c885122a",
    staff_Id: "472G12D1G",
    name: "Megha",
    password: "Megha@123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd474",
        courseTeach: ["63eed1552c585180bab38ac2"],
      },
    ],
  },
  {
    _id: "63ef69011329ffd0c885122b",
    staff_Id: "572G12D1P",
    name: "Manoj",
    password: "Manoj@123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd472",
        courseTeach: ["63eed1552c585180bab38ac1", "63eed1552c585180bab38ac1"],
      },
      {
        branch_id: "63ef71444fbd27e9e76dd474",
        courseTeach: ["63eed1552c585180bab38ac4"],
      },
    ],
  },
  {
    _id: "63ef69011329ffd0c885122c",
    staff_Id: "672G12D1G",
    name: "Ritu pao",
    password: "Ritu@123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd472",
        courseTeach: ["63eed1552c585180bab38ac3"],
      },
      {
        branch_id: "63ef71444fbd27e9e76dd473",
        courseTeach: ["63eed1552c585180bab38ac3"],
      },
    ],
  },
  {
    _id: "63ef69011329ffd0c885122d",
    staff_Id: "772G12D1G",
    name: "Yash Varhdaan",
    password: "yash@123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd474",
        courseTeach: ["63eed1552c585180bab38ac1"],
      },
    ],
  },
  {
    _id: "63ef69011329ffd0c885122e",
    staff_Id: "872G12D1G",
    name: "Aswin",
    password: "Aswin@123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd474",
        courseTeach: ["63eed1552c585180bab38ac1"],
      },
      {
        branch_id: "63ef71444fbd27e9e76dd473",
        courseTeach: ["63eed1552c585180bab38ac1", "63eefe48f14d7cfbc76e5af0"],
      },
    ],
  },
  {
    _id: "63ef8246ee60c69f74ef7b64",
    staff_Id: "1172G12D1G",
    name: "Pankaj kumari",
    password: "pankaj123",
    role: "staff",
    branchTeach: [
      {
        branch_id: "63ef71444fbd27e9e76dd474",
        courseTeach: ["63eed1552c585180bab38ac1"],
      },
      {
        branch_id: "63ef71444fbd27e9e76dd473",
        courseTeach: ["63eed1552c585180bab38ac1"],
      },
    ],
  },
];

module.exports = teachers;
