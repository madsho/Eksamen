//1  SHOW ALL MATCHES
//2 DELETE MATCH
const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/" //Path to database


//1 ALL MATCHES
exports.confirmMatch = (req, res) => {
    let allUserMatched = [];
       let i = 0
      //while (req.body.like.length > i){
      for (i = 0; req.body.like.length > i; i++){
       
          
          let userMatched = JSON.parse(fs.readFileSync(dataBase + req.body.like[i] + ".json")) 
          let userMatchedValues = Object.values(userMatched) // får values fra 
          let userMatchedArray = userMatchedValues [11];
          for (i = 0; userMatchedArray.length > i; i++){             
              if (userMatched.username == req.body.like[i] && userMatchedArray[i] == req.body.username){
              allUserMatched.push(userMatched.username)
           }
          }
      }
    res.json(allUserMatched)
    console.log(allUserMatched);
}

//2 DELETE MATCH
exports.deleteMatch = (req, res) => {
    let user = JSON.parse(fs.readFileSync(dataBase + req.body.userDel + ".json")) 
    let userValues = Object.values(user) // får values fra 
    let userMatchedArray = userValues [11];
    console.log(userMatchedArray)
  
  //https://www.codegrepper.com/code-examples/c/how+to+remove+specific+object+from+an+array+of+objects+in+javascript
  userMatchedArray = userMatchedArray.filter(item => item !== req.body.user)
  
  user.like = userMatchedArray
  
  fs.writeFileSync(dataBase + req.body.userDel + ".json", JSON.stringify(user))
    res.json("delete completed")
}