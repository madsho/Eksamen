//LIKE BUTTON AND MATCH ALERT
const express = require ("express");
const router = express.Router();

let like = require ("../Controller/likeController");
   
//LIKE BUTTON

router.post("/", like.like);

module.exports = router; 
