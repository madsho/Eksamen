const express = require("express");
let router = express.Router();
const match = require("../Models/Match");

router.get("/", (req, res) =>{
    res.json(match.myMatch); // Shows if there is a match
})
router.post("/",(req,res)=> {
    res.json({"message" : "Match has been created"}) // Shows that a match has been created
});
router.put("/", (req,res) => {
    match.myMatch = match.newMatch //the match is updated to a the new match 
    res.json({"message": "Match updated"})
});
router.delete("/", (req,res) => {
    match.myMatch = []; // The mathc is deleted.
    Users.newMatch = [];
    res.json({"message": "match deleted"})
});





module.exports = router 