
const express = require ("express");
const fs = require ("fs");
const router = express.Router();

// variables
const dataBase = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
   

// Vise matches på view all matches tab
router.post('/confirmMatch', (req, res) => {
        
    fs.readdir(dataBase, (err, files) => {
      if (err) {console.log(err);}

      let sent = false;

      let allUserMatched = [];
      for (i = 0; files.length > i; i++){
    if (sent == false){

      files.forEach(file => {
       
          let userMatched = JSON.parse(fs.readFileSync(dataBase + file)) 
          let userMatchedValues = Object.values(userMatched) // får values fra 
          let userMatchedArray = userMatchedValues [11];

          let liked = "";

          for (i = 0; userMatchedArray.length > i; i++){
              liked = userMatchedArray[i]
             
              if (userMatched.username == req.body.like && liked == req.body.username){
                allUserMatched.push(userMatched.firstName) 
                 }
          }
          
         console.log(allUserMatched);
                sent = true
        
            }) 
        }
        }
        res.json(allUserMatched)
        
    })
})

module.exports = router; 