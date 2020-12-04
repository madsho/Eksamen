
const express = require ("express");
const fs = require ("fs");
const router = express.Router();

// variables
const dataBase = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
   

// Vise matches på view all matches tab
router.post('/confirmMatch', (req, res) => {

    
      let allUserMatched = [];

      for (i = 0; req.body.like.length > i; i++){
  
          let userMatched = JSON.parse(fs.readFileSync(dataBase + req.body.like[i] + ".json")) 
          let userMatchedValues = Object.values(userMatched) // får values fra 
          let userMatchedArray = userMatchedValues [11];
        
 
          for (i = 0; userMatchedArray.length >= i; i++){             
              if (userMatched.username = req.body.like[i]){
                if(userMatchedArray[i] = req.body.username){
                  allUserMatched.push(userMatched.username) 
                //console.log(allUserMatched);
              }
           }
        }
    }res.json(allUserMatched)
    console.log(allUserMatched);
});

module.exports = router; 