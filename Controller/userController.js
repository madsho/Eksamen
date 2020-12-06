// 1 LOGIN
// 2 CREATE USER 
// 3 UPDATED USER
// 4 DELETE USER
const express = require ("express");
const fs = require ("fs");

const dataBase = "./Database/"; //Path to database

// 1 LOGIN
exports.loginUser = (req, res) =>{
  let user = JSON.parse(fs.readFileSync(dataBase + req.body[0] + ".json")); //finds the file of the username entered on the login page
      if (user.password == req.body[1] && user.username == req.body[0]){ // if a file is found the username and password is checked to see if they match
        res.json(user); // if they match a responds with the data that has been parsed is sent so it can be stored in localstorage
      }else{
        res.json({err: "Error"}); //if they do not match a responds is with err is sent back and stored in local storage
      };
};


//Model to structure incomming data when creating a new profile
const User = require("../Models/userModels.js");


//2 CREATE USER
exports.createUser = (req, res) => {
    
    const newuser = new User( //Gets the model form userModels.js to structure the data.
       req.body.email, // require all the details typed in by the user
       req.body.username,
       req.body.password,
       req.body.firstName,
       req.body.lastName,
       req.body.phone,
       req.body.interest,
       req.body.dob,
       req.body.gender,
       [],
       []
    );
   
    users = JSON.stringify(newuser); //Stringifies the object and values 
    
      fs.writeFileSync(dataBase + req.body.username + ".json", users);//writes a new file with path to the database. The name of the file is the username of the user created and the file name ends with .json to make it a json file
      //"users" is the added to the file at the end and is what is writtin into the json file 

};

//3 UPDATED USER
exports.updateUser = (req, res) => {
  
  let oldUser = JSON.parse(fs.readFileSync(dataBase + req.body.username + ".json")); // The file of the user operatin the website is found

// if there is typed anything into the email input and the update details button is pressed the old details will be updated with the new

  if (req.body.email.length >= 1) {
    oldUser.email = req.body.email
  };// if the password is changed
  if (req.body.password.length >= 1) {
    oldUser.password = req.body.password
  }; //if the firstname is changed
  if (req.body.firstName.length >= 1) {
    oldUser.firstName = req.body.firstName
  };//if the lastname is changed
  if (req.body.lastName.length >= 1) {
    oldUser.lastName = req.body.lastName
  }; // if the phone nr. is changed
  if (req.body.phone.length >= 1) {
    oldUser.phone = req.body.phone
  };
   
    fs.writeFileSync(dataBase + req.body.username + ".json", JSON.stringify(oldUser)) //if anything is changed the old details will be updated with the new 
    res.json(oldUser);

};

// 4 DELETE USER
exports.deleteUser = (req, res) => {
  username = req.body.username; // the username of the user operating the website is used to find their file
  fs.unlink(dataBase + username + ".json", (err) => { // unlink is used to delete the json file. 
    if (err){throw (err); 
    } else{
      res.json("Your profile has been deleted"); //responds with a string that is used for an alert as a confirmation to their file being deleted
    };
  });
};
