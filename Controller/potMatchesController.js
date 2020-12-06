//1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
//2 CONTROL IF USER ALREADY HAS BEEN LIKED

const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/"; //Path to database

exports.potentielMatch = (req, res) => {
    
    fs.readdir(dataBase, (err, files) => {
        if (err) throw (err);
          let evaluated = false;
  
           files.forEach(file => {
   
             let otherUser = JSON.parse(fs.readFileSync(dataBase + file));
            

        //1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
             if (evaluated == false){
                 
               if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){
            
                 let disLiked = false;
   
                 let otherUserValues = Object.values(otherUser); // får values fra 
                 let otherUserArray = otherUserValues [10]; // henviser specifikt til value 10
   
                 for (i = 0; otherUserArray.length > i; i++){
                      if(otherUserArray[i] == req.body.username){
                        disLiked = true
         };
       };
       //2 CONTROL IF USER ALREADY HAS BEEN LIKED
             if (evaluated == false){
                     
               if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){
           
                 let liked = false;
   
                 let otherUserValues = Object.values(otherUser); // får values fra 
                 let otherUserArray = otherUserValues [11]; // henviser specifikt til value 10
   
                 for (i = 0; otherUserArray.length > i; i++){
                     if(otherUserArray[i] == req.body.username){
                      liked = true
         };
       };
      if (disLiked == false && liked == false){
           res.json(otherUser);
           evaluated = true;
               };
             };
           };
           };
         };
       });
    });
};