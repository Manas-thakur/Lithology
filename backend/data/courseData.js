const { ObjectId } = require("mongodb");
const { default: mongoose } = require("mongoose");

const courses = [
  {
    course_id: "PCC-CSE-203G",
    name: "Data Structure & Algorithms",
    teacherAssign: ["63ea78c66d2a0e0bda5d81bb", "63ea78c66d2a0e0bda5d81b9"],
    // teacherAssign : [Manoj , Yash vardhan , Megha]
  },
  {
    course_id: "PCC-CSE-207G",
    name: "Python Programming",
    teacherAssign: ["63ea78c66d2a0e0bda5d81b8", "63ea78c66d2a0e0bda5d81bc"],
    // teacherAssign : [Pankaj , Naveen ]
  },
  {
    course_id: "PCC-CSE-254G",
    name: "Fundamentals of AIML",
    teacherAssign: ["63ea78c66d2a0e0bda5d81ba"],
    // teacherAssign : [Ritu pawava]
  },
  {
    course_id: "PCC-CSE-206G",
    name: "Operating System",
    teacherAssign: [
      new ObjectId("63ea78c66d2a0e0bda5d81b9"),
      "63ea78c66d2a0e0bda5d81bc",
    ],
  },
];

module.exports = courses;
