// DISLIKE BUTTON 
const express = require ("express");
const router = express.Router();

let dislike = require ("../Controller/dislikeController");

router.post("/", dislike.dislike); 
  
module.exports = router; 