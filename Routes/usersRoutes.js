
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
      router.put('/update', (req, res) => {
        fs.readFileSync(dataBase + req.body[1].username + ".json", (err) => {
          
          const updatedUser = new User( //henter fra Modelsmappen den model som en user sakl blive stored i Databasen
            newId = Date.now().toString(),
             req.body[0].email,
             req.body[0].username,
             req.body[0].password,
             req.body[0].firstName,
             req.body[0].lastName,
             req.body[0].phone,
             req.body[0].interest,
             req.body[0].dob,
             req.body[0].gender,
             [],
             []
          );
         upUser = JSON.stringify(updatedUser)
         
          fs.writeFile(dataBase + req.body.username + ".json", upUser, (err) => {
            if (err) throw (err)
          });
        })
      });

      // DELETE
    
     router.delete('/delete', (req, res) => {
       username = req.body.username
      fs.unlink(dataBase + username + ".json", (err) => {
        if (err){throw (err)
        } else{
          console.log("Your profile has been deleted")
        }
      })
    });

  

  module.exports = router; 