const { match } = require("assert");
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
  router.post("/match", (req,res)=>{
    fs.readdir (dataPath, (err, files)=>{
    
      let matchSent = false;

        files.forEach(file => {
     let matchUser = JSON.parse(fs.readFileSync(dataPath + file))
    console.log(matchUser)

   if (matchSent == false){
      if (matchUser.interest == req.body.gender && matchUser.gender == req.body.interest){
        console.log("Match succeded")
        res.json(matchUser)
      } matchSent = true
    }
  })
  })
})

router.post("/dislike", (req,res)=>{

  let userDisLiked = req.body[1] //henter hver user 

  let userOperator = req.body[0].username

    let evalUser = JSON.parse(fs.readFileSync(dataPath + userDisLiked + ".json"))
    
    let oldUserValues = Object.values(evalUser)

    let oldArray = oldUserValues [10];


    let newArray = new Array (userOperator)

    for (i=0; oldArray.length > i; i++){
      let oldValue = oldArray [i];

      newArray.push(oldValue);
    }

    evalUser.dislike = newArray

    fs.writeFileSync(dataPath + userDisLiked + ".json", JSON.stringify(evalUser), (err) => { //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind i
    if (err)throw (err)

  })

  let sent = false

  if (sent == false){

    let disLike = false;

  fs.readdir(dataPath, (err, files) => {
    if (err) throw (err)
      files.forEach(file => {
   let nextUser = JSON.parse(fs.readFileSync(dataPath + file))
  console.log(nextUser)

        let nextUserValues = Object.values(nextUser) // får values fra nextuser
        let nextUserArray = nextUserValues [10]; // henviser specifikt til value 10

  for (i=0; nextUserArray.length > i; i++){
    if(i == req.body[0].username){
      disLike = false
    }
  }
 if (disLike == true){
    if (nextUser.interest == req.body[0].gender && nextUser.gender == req.body[0].interest){
      console.log(nextUser)
      console.log("Match succeded")
      res.json(nextUser)
        } sent = true
      }
    })
  })
}

})



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
             [],
             []
          );
         
          users = JSON.stringify(newuser) //laver de indtastet informationer til en string og derefter sætter dem pænt op med null, 2
          
           //Local storage
          
            fs.writeFileSync(dataPath + req.body.username + ".json", users, (err) => { //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind i
              if ((err) )throw (err)
      
              
              
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