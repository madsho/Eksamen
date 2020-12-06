// 1 SHOW POTENTIEL USERS TO MATCH WITH
const express = require ("express");
const router = express.Router();

let potentielMatch = require ("../Controller/potMatchesController");

// 1 SHOW POTENTIEL USERS TO MATCH WITH
router.post("/", potentielMatch.potentielMatch);

module.exports = router; 