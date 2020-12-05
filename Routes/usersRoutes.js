
const express = require ("express");
const fs = require ("fs");
const router = express.Router();



    // variables
    const dataBase = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
  


    const User = require("../Models/userModels.js");
    //Create
    router.post("/login", (req, res)=>{
      let user = JSON.parse(fs.readFileSync(dataBase + req.body[0] + ".json"))
      if (user.password == req.body[1] && user.username == req.body[0]){
        res.json(user)
      }else{
        res.json({err: "Error"})
      }
    })
  
    router.post('/', (req, res) => {
     
          //Et ID der bliver tildet. Id'et er Datoen/tiddspunktet profilen er blevet oprettet på
          const newuser = new User( //henter fra Modelsmappen den model som en user sakl blive stored i Databasen
            newId = Date.now().toString(),
             req.body.email,
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
         
          users = JSON.stringify(newuser) //laver de indtastet informationer til en string og derefter sætter dem pænt op med null, 2
          
           //Local storage
          
            fs.writeFileSync(dataBase + req.body.username + ".json", users, (err) => { //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind i
              if (err) throw (err)
              
            });
        
      });
      //Update
      router.post('/update', (req, res) => {

        let oldUser = JSON.parse(fs.readFileSync(dataBase + req.body.username + ".json"))

        if (req.body.email.length >= 1) {
          oldUser.email = req.body.email
        }
        if (req.body.password.length >= 1) {
          oldUser.password = req.body.password
        }
        if (req.body.firstName.length >= 1) {
          oldUser.firstName = req.body.firstName
        }
        if (req.body.lastName.length >= 1) {
          oldUser.lastName = req.body.lastName
        }
        if (req.body.phone.length >= 1) {
          oldUser.phone = req.body.phone
        }
         
          fs.writeFileSync(dataBase + req.body.username + ".json", JSON.stringify(oldUser))
          res.json(oldUser);
      }); 

      // DELETE
    
     router.delete('/delete', (req, res) => {
       username = req.body.username
      fs.unlink(dataBase + username + ".json", (err) => {
        if (err){throw (err)
        } else{
          res.json("Your profile has been deleted")
          console.log("Your profile has been deleted")
        }
      })
    });

  

  module.exports = router; 