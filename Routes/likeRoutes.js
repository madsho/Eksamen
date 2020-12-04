//LIKE BUTTON AND MATCH ALERT
const express = require ("express");
const fs = require ("fs");
const router = express.Router();

const dataBase = "./Database/" //const so database always is located 

//LIKE BUTTON

router.post("/", (req,res)=>{ //route "/" is used and a POST request

    let userLiked = req.body[1] // The user that is being liked. The only thins is username so no need to specify
  
    let userOperator = req.body[0].username //The user operating the site / liking. Here there is a lot of info so it's specified 
  
      let evaluatedUser = JSON.parse(fs.readFileSync(dataBase + userLiked + ".json"))// reading and parsing the data found from the user who is being liked
      
  
      let oldUserValues = Object.values(evaluatedUser)//returning an array found on the objects
      let oldValue = oldUserValues [11];//returning the properties found on idex 11 (like)
  
  
      let newArray = new Array (userOperator)//The username of the user disliking is made to an array
  
      for (i=0; oldValue.length > i; i++){//for loop running through the existing properties of the array containing the users who have disliked them
        let newValue = oldValue [i]; //the old values are set as new values so they can be added into a new array
  
        newArray.push(newValue);// the new values (old values transformed into new) are pushed into the new array made of the users liking.
      };
  
      evaluatedUser.like = newArray //The new array with the old values and the user liking replaces the old like property 
  
      fs.writeFileSync(dataBase + userLiked + ".json", JSON.stringify(evaluatedUser))  //Updates the file of the liked user with the users name who is liking in the like obejct.
       res.json(userLiked) //responds with the details of the user
    })



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
})

module.exports = router; 
