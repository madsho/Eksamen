
const userRoutes = (app, fs) => {
    // variables
    const dataPath = "./Database/" //indikere hvilken datapath som alle requests skal følge. Altså hvor databasen ligger 
   
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

       


    const userModel = require("../Models/Users.js");
    //Create
  
    app.post('/Users/register', (req, res) => {
    
         const newId = Date.now().toString() //Et ID der bliver tildet. Id'et er Datoen/tiddspunktet profilen er blevet oprettet på
         const newuser = new userModel.userClass( //henter fra Modelsmappen den model som en user sakl blive stored i Databasen
          id = newId,
          email = req.body.email,
           username= req.body.signUsername,
           password = req.body.signPassword,
           firstName = req.body.firstname,
           lastName = req.body.lastname,
           phone = req.body.phone,
           interest = req.body.interest,
           dob = req.body.dob,
           gender = req.body.gender,
        );
       
        users = JSON.stringify(newuser, null, 2) //laver de indtastet informationer til en string og derefter sætter dem pænt op med null, 2
        
         //Local storage
        
          fs.writeFile(dataPath + req.body.signUsername + ".json", users, (err) => { //laver en ny fil med filnavnet som id'et tilføjet json hvor den lange string kommer ind i
            if (err) throw err;
          res.status(200).send(users);
          });
      });

       
       

    /*
      //Update
      app.put('/users/:id', (req, res) => {
        readFile(data => {
          // add the new user
          const userId = req.params['id'];
          data[userId] = req.body;
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`users id:${userId} updated`);
          });
        }, true);
      });
      // DELETE
      
    app.delete('/users/:id', (req, res) => {
        readFile(data => {
        // add the new user
        const userId = req.params['id'];
        delete data[userId];
    
        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`users id:${userId} removed`);
        });
        }, true);
    });
*/


    };

  module.exports = userRoutes; 