
const express = require ("express");
const fs = require ("fs");
const router = express.Router();
const err = "Error"


    // variables
    const dataPath = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
   
      
  // Vise matches på view all matches tab
      router.post('/confirmMatch', (req, res) => {
        
          fs.readdir(dataPath, (err, files) => {
            if (err) throw (err)
            files.forEach(file => {
              
                let userMatched = JSON.parse(fs.readFileSync(dataPath + file))
                let userMatchedValues = Object.values(userMatched) // får values fra 
                let userMatchedArray = userMatchedValues [11];

                let userNam = "";
               
                for (i = 0; userMatchedArray.length > i; i++){
                    userNam = userMatchedArray[i]
                }

                if (userMatched.username = req.body.like && userNam == req.body.username){
                  
                  res.json(userMatched)
               } 
          })
      })
  })

       

// check if disliked 
  router.post("/match", (req,res)=>{

    fs.readdir(dataPath, (err, files) => {
     if (err) throw (err)
       let sent = false;

        files.forEach(file => {

          let otherUser = JSON.parse(fs.readFileSync(dataPath + file))
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
})

 

router.post("/dislike", (req,res)=>{

  let userDisLiked = req.body[1] //henter hver user den user der bliver disliked

  let userOperator = req.body[0].username //Den user der disliker

    let evalUser = JSON.parse(fs.readFileSync(dataPath + userDisLiked + ".json"))
    

    let oldUserValues = Object.values(evalUser)
    let oldArray = oldUserValues [10];


    let newArray = new Array (userOperator)

    for (i=0; oldArray.length > i; i++){
      let oldValue = oldArray [i];

      newArray.push(oldValue);
    };

    evalUser.dislike = newArray

    fs.writeFileSync(dataPath + userDisLiked + ".json", JSON.stringify(evalUser))  //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind 
})

router.post("/like", (req,res)=>{

  let userDisLiked = req.body[1] //henter hver user den user der bliver disliked

  let userOperator = req.body[0].username //Den user der disliker

    let evalUser = JSON.parse(fs.readFileSync(dataPath + userDisLiked + ".json"))
    

    let oldUserValues = Object.values(evalUser)
    let oldArray = oldUserValues [11];


    let newArray = new Array (userOperator)

    for (i=0; oldArray.length > i; i++){
      let oldValue = oldArray [i];

      newArray.push(oldValue);
    };

    evalUser.like = newArray

    fs.writeFileSync(dataPath + userDisLiked + ".json", JSON.stringify(evalUser))  //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind 
})


    const User = require("../Models/userModels.js");
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
      router.put('/update', (req, res) => {
        fs.readFileSync(dataPath + req.body[1].username + ".json", (err) => {
          
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
         
          fs.writeFile(dataPath + req.body.username + ".json", upUser, (err) => {
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