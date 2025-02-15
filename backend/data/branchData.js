const { ObjectId } = require("mongodb");

const branchs = [
    {
        branch_id : 415,
        name : "AIML-1",
        hod : new ObjectId("63ef69011329ffd0c885122c"),
        courses : [new ObjectId("63eed1552c585180bab38ac1"),new ObjectId("63eed1552c585180bab38ac3"),"63eefe48f14d7cfbc76e5af0"]
    },
    {
        branch_id : 416,
        name : "AIML-2",
        hod : new ObjectId("63ef69011329ffd0c885122c"),
        courses : [new ObjectId("63eed1552c585180bab38ac1"),new ObjectId("63eed1552c585180bab38ac3"),"63eefe48f14d7cfbc76e5af0"]
    },
    {
        branch_id : 216,
        name : "CSE-1",
        hod : new ObjectId("63ef69011329ffd0c885122d"),
        courses : [new ObjectId("63eed1552c585180bab38ac4"),"63eed1552c585180bab38ac2"]
    },
    {
        branch_id : 312,
        name: "IOT",
        hod : new ObjectId("63ef69011329ffd0c885122b"),
        courses : [new ObjectId("63eed1552c585180bab38ac4"),"63eed1552c585180bab38ac2"]
        
    }
    ]

module.exports = branchs;