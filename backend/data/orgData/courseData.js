const { ObjectId } = require("mongodb");
// const { default: mongoose } = require("mongoose");

const courses = [
  {
    course_id: "PCC-CSE-207G",
    name: "Python Programming",
    // teacherAssign : ["63ea78c66d2a0e0bda5d81b8","63ea78c66d2a0e0bda5d81bc"]
    // teacherAssign : [Pankaj , Naveen ]
  },
  {
    course_id: "PCC-CSE-254G",
    name: "Fundamentals of AIML",
    // teacherAssign : ["63ea78c66d2a0e0bda5d81ba"]
    // teacherAssign : [Ritu pawava]
  },
  {
    course_id: "PCC-CSE-206G",
    name: "Operating System",
    // teacherAssign : [new ObjectId("63ea78c66d2a0e0bda5d81b9"),"63ea78c66d2a0e0bda5d81bc"]
  },
  {
    course_id: "PCC-CSE-250G",
    name: "Programming for Data Science & AIML",
  },
  {
    course_id: "PCC-CSE-252G",
    name: "Object Oriented Programming with Java",
  },
  {
    course_id: "PCC-CSE-201G",
    name: "Database Management System",
  },
  {
    course_id: "HSMC-02G",
    name: "ORGANIZATIONAL BEHAVIOUR & Environmental Sciences",
  },
  {
    course_id: "LC-CSE-212G",
    name: "Operating System Lab",
  },
  {
    course_id: "LC-CSE-256G",
    name: "Object Oriented Programming LAB",
  },
  {
    course_id: "LC-CSE-258G",
    name: "Programming for Data Science & AIML LAB",
  },
  {
    course_id: "LC-CSE-209G",
    name: "Database Management System Lab",
  },
  {
    course_id: "PCC-CSE-202G",
    name: "Discrete Mathematics",
  },
  {
    course_id: "PCC-CSE-204G",
    name: "Computer Organization & Architecture",
  },
  {
    course_id: "LC-CSE-210G",
    name: "Web Technologies",
  },
];

module.exports = courses;
