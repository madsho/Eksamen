// 1 SHOW CONFIRMED MATCHES
// 2 DELETE MATCH
const express = require ("express");

const router = express.Router();

let match = require ("../Controller/matchController");
   

// 1 SHOW CONFIRMED MATCHES 
router.post('/confirmMatch', match.confirmMatch);
// 2 DELETE MATCH
router.post ("/deletematch", match.deleteMatch);

module.exports = router; 

