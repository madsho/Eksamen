//1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
//2 CONTROL IF USER ALREADY HAS BEEN LIKED

const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/"; //Path to database


exports.potentielMatch = (req, res) => {
    
    fs.readdir(dataBase, (err, files) => { //read directory of the Database
        if (err) throw (err);
          let evaluated = false; // stops the loop if the potentiel match isn't liked or disliked 
  
           files.forEach(file => { // for each loop goes htrough each file in the directory 
   
             let otherUser = JSON.parse(fs.readFileSync(dataBase + file)); // reads and parses the data for each file. This data is the data of a potentiel match that the user operating the website can like or dislike
            

        //1 CONTROL IF USER ALREADY HAS BEEN DISLIKED
             if (evaluated == false){
                 
               if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){ //if the user found above is interested in the gender operating the application and if interested gender of the user operating is the same as the gender found above 
            
                 let disLiked = false;
   
                 let otherUserValues = Object.values(otherUser); //returning an array found on the objects of "otherUser"
                 let otherUserArray = otherUserValues [9]; // return the values on index 10 which is all the users who disliked "otherUser"
   
                 for (i = 0; otherUserArray.length > i; i++){ //for loop checking if the user operating the website...
                      if(otherUserArray[i] == req.body.username){ //.. already has disliked the user.
                        disLiked = true // if this is the case disliked will become true and the for each loop will repeated and a new user will be found
         };
       };
       
       //2 CONTROL IF USER ALREADY HAS BEEN LIKED
             if (evaluated == false){
                     
               if (otherUser.interest == req.body.gender && otherUser.gender == req.body.interest){ //if the user found above is interested in the gender operating the application and if interested gender of the user operating is the same as the gender found above 
           
                 let liked = false;
   
                 let otherUserValuesLiked = Object.values(otherUser);  //returning an array found on the objects of "otherUser"
                 let otherUserArrayLiked = otherUserValuesLiked [10]; // return the values on index 11 which is all the users who liked "otherUser"
   
                 for (i = 0; otherUserArrayLiked.length > i; i++){//for loop checking if the user operating the website...
                     if(otherUserArrayLiked[i] == req.body.username){//.. already has liked the user
                      liked = true// if this is the case liked will become true and the for each loop will repeated and a new user will be found
         };
       };
      if (disLiked == false && liked == false){ //if both disliked and liked are false and the user using the website hasn't liked or disliked the potentiel match then...
           res.json(otherUser); //the profile of the potentiel match is found and responded with. This is then displayed on the website
           evaluated = true; //in order to stop the loop evaluated is set to true and the function will first be run when the page is reloaded
               };
             };
           };
           };
         };
       });
    });
};