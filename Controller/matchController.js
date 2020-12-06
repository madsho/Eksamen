//1  SHOW ALL MATCHES
//2 DELETE MATCH
const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/"; //Path to database

//NB USER 1 IS OPERATING THE WEBSITE (LOGGED IN) AND USER 2 IS A DIFFERENT USER WHO HAS LIKED USER 1 

//1 ALL MATCHES
exports.confirmMatch = (req, res) => {
    let allUserMatched = []; //empty array where all matches can be pushed to in order to display them

      for (i = 0; req.body.like.length > i; i++){ // loop trough all users who liked the user operating the website (user 1)
       
          let userMatched = JSON.parse(fs.readFileSync(dataBase + req.body.like[i] + ".json")); //read and parse the file of a user (user 2) who has liked the operating user (user 1)
          let userMatchedValues = Object.values(userMatched); //returning an array found on the objects of user 2
          let userMatchedArray = userMatchedValues [10]; // return the values on index 11 which is all the users who liked the other person
          for (i = 0; userMatchedArray.length > i; i++){ //now for all the users who has liked user 2 is looped through         
              if (userMatched.username == req.body.like[i] && userMatchedArray[i] == req.body.username){ // if user 2 username appers in user 1 like array (user 2 has liked user 1) and user 1 username appers in user 2 like (user 1 has liked user 2)
              allUserMatched.push(userMatched.username); // the username of user 2 will be pushed to the empty array and shown in matches tab                                            
           };
          };
      };
    res.json(allUserMatched); //responds with the array
};

//2 DELETE MATCH
exports.deleteMatch = (req, res) => {
    let user = JSON.parse(fs.readFileSync(dataBase + req.body.userDel + ".json")); //Read and parse the file of the username written in the input field
    let userValues = Object.values(user); //returning an array found on the objects 
    let userMatchedArray = userValues [10];// return the values on index 11 which is all the users who liked the other person

  
  //https://www.codegrepper.com/code-examples/c/how+to+remove+specific+object+from+an+array+of+objects+in+javascript
  userMatchedArray = userMatchedArray.filter(item => item !== req.body.user); //filter through the users and deletes the useranme of user 1. User 1 has then not liked user 2 anymore 
  
  user.like = userMatchedArray; // the new array without the username og user one i inserted
  
  fs.writeFileSync(dataBase + req.body.userDel + ".json", JSON.stringify(user)); //write the new details into the file
    res.json("delete completed"); // responds with message. (testing)
};