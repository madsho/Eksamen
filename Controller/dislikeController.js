//1  SHOW ALL MATCHES
//2 DELETE MATCH
const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/" //Path to database

exports.dislike = (req, res) => {
    
    let userDisLiked = req.body[1] // The user that is being disliked. The only thins is username so no need to specify
  
    let userOperator = req.body[0].username //The user operating the site / disliking. Here there is a lot of info so it's specified 

  
      let evaluatedUser = JSON.parse(fs.readFileSync(dataBase + userDisLiked + ".json")) // reading and parsing the data found from the user who is being disliked
      
  
      let oldUserValues = Object.values(evaluatedUser) //returning an array found on the objects
      let oldValue = oldUserValues [10]; //returning the properties found on idex 10 (dislike) 
  
  
      let newArray = new Array (userOperator) //The username of the user disliking is made to an array
  
      for (i=0; oldValue.length > i; i++){ //for loop running through the existing properties of the array containing the users who has disliked them
        let newValue = oldValue [i]; //the old values are set as new values so they can be added into a new array
  
        newArray.push(newValue); // the new values (old values transformed into new) are pushed into the new array made of the users disliking. 
      };
  
      evaluatedUser.dislike = newArray //The new array with the old values and the user disliking replaces the old dislike property 
  
      fs.writeFileSync(dataBase + userDisLiked + ".json", JSON.stringify(evaluatedUser)) //Updates the file of the disliked user with the users name who is disliking in the dislike obejct.
}