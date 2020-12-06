 
const express = require ("express");
const router = express.Router();

let potentielMatch = require ("../Controller/potMatchesController")


router.post("/", potentielMatch.potentielMatch)

module.exports = router; 