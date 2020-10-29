const express = require("express");
let router = express.Router();

// info about match and users are imported from the models files 
const Users = require("../Models/Users");
const { readSync } = require("fs");




//CRUD endpoints for both users
router.get("/", (req, res) =>{
    res.json(Users.myUser) // Shows info about the two users
});
router.post("/",(req,res)=> {
    res.json({"message" : "User has been created"}) // shows the message that a user had been created 
});
router.put("/", (req,res) => {
    Users.myUser = Users.newUsers //the original user is updated with the new user 
    res.json({"message": "Users updated"})
});
router.delete("/", (req,res) => {
    Users.myUser = []; //The two users are deleted or in other words changed to an empty array 
    Users.newUsers = [];
    res.json({"message": "Deleted Users"})
});



module.exports = router 