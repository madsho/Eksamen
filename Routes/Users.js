const express = require ("express");
const fs = require ("fs");
const router = express.Router();
const err = "Error"


    // variables
    const dataPath = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
   /*
      // READ
  
      app.get('/Users/login', (req, res) => {
        
          fs.readdir(dataPath, (err, files) => {
          if (err){throw err;} else{
            files.forEach(file => {
            fs.readFile(dataPath + file, (data) =>{
                user = JSON.parse(data)
             // for (value of Object.values(data))
             if (user = req.body.signInUser){
              res.status(200).send(console.log("sucess"))
            } 
          })
          // login read file 
        })
      }
    })
  })

       */


    const User = require("../Models/Users.js");
    //Create
    router.post("/login", (req, res)=>{
      console.log(req.body)

      let user = JSON.parse(fs.readFileSync(dataPath + req.body.username + ".json"))
      console.log(user)
      if (user.password == req.body.password && user.username == req.body.username){
        console.log("login succeded")
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
        );
       
        users = JSON.stringify(newuser) //laver de indtastet informationer til en string og derefter sætter dem pænt op med null, 2
        
         //Local storage
        
          fs.writeFileSync(dataPath + req.body.username + ".json", users, (err) => { //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind i
            if (err) throw err;
          
          });
      });

       
       

    
      //Update
      router.put('/Update', (req, res) => {
        fs.readFileSync(dataPath + req.body.username + ".json", (err) => {
          if (err) throw (err)
          req.body.email,
           req.body.password,
           req.body.firstName,
           req.body.lastName,
           req.body.phone,
           req.body.interest,
           req.body.gender,
           updatedUser = req.body.updatedUser
           user = JSON.stringify(updatedUser)
         
          fs.writeFile(dataPath + req.body.username + ".json", user, (err) => {
            if (err) throw (err)
          });
        })
      });




      // DELETE
    
     router.delete('/delete', (req, res) => {
       username = req.body.username
      fs.unlink(dataPath + username + ".json", (err) => {
        if (err){throw (err)
        } else{
          console.log("Your profile has been deleted")
        }
      })
    });

  

  module.exports = router; 