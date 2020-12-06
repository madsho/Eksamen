//1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
//2 CONTROL IF USER ALREADY HAS BEEN LIKED

const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/" //Path to database

exports.potentielMatch = (req, res) => {
    
    fs.readdir(dataBase, (err, files) => {
        if (err) throw (err)
          let sent = false;
   //1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
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
       //2 CONTROL IF USER ALREADY HAS BEEN LIKED
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
}