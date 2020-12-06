//LIKE BUTTON AND MATCH ALERT
const express = require ("express");
const router = express.Router();

let like = require ("../Controller/likeController")
   
//LIKE BUTTON

router.post("/", like.like);


/*
//ENSURES THAT LIKED USERS OR DISLIKED USERS ARE NOT SHOWN AGAIN 

router.post("/match", (req,res)=>{

    fs.readdir(dataBase, (err, files) => {
     if (err) throw (err)
       let sent = false;

        files.forEach(file => {

          let otherUser = JSON.parse(fs.readFileSync(dataBase + file))
          //console.log(otherUser)
          
          if (sent == false){
              
            if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){
         
              let disLike = false;

              let otherUserValues = Object.values(otherUser) // får values fra 
              let otherUserArray = otherUserValues [10]; // henviser specifikt til value 10

              for (i = 0; otherUserArray.length > i; i++){
                   if(otherUserArray[i] == req.body.username){
             disLike = true
      };
    };
          if (sent == false){
                  
            if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){
        
              let like = false;

              let otherUserValues = Object.values(otherUser) // får values fra 
              let otherUserArray = otherUserValues [11]; // henviser specifikt til value 10

              for (i = 0; otherUserArray.length > i; i++){
                  if(otherUserArray[i] == req.body.username){
            like = true
      };
    };
   if (disLike == false && like == false){
        console.log(otherUser)
        console.log("Match succeded")
        res.json(otherUser)
        sent = true
            } 
          }
        }
        }
      }
    })
    })
})*/

module.exports = router; 
