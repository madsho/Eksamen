
const userRoutes = (app, fs) => {
    // variables
    const dataPath = "./Database/"
    
      // READ
  
      app.get('/Users', (req, res) => {
        
          fs.readdir(dataPath, (err, files) => {
            
          if (err){throw err;} else{
            files.forEach(file => {
            fs.readFile(file, (data) =>{

              for (let value of Object.values(data)){
                 if (value = req.body.signInUser){
                   res.status(200).send(console.log("sucess"))
            
            }}
          })
        })
      }
    })
  })

       


    const userModel = require("../Models/Users.js");
    //Create
  
    app.post('/Users/register', (req, res) => {
    
         const newid = Date.now().toString()
         const newuser = new userModel.userClass(
           email = req.body.email,
           username= req.body.signusername,
           password = req.body.signpassword,
           firstName = req.body.firstname,
           lastName = req.body.lastname,
           phone = req.body.phone,
           interest = req.body.interest,
           dob = req.body.Dob,
           gender = req.body.gender,
        );


        users = JSON.stringify(newuser, null, 2)
      
          fs.writeFile(dataPath + newid + ".json", users, (err) => {
            if (err) throw err;
            res.status(200).send(alert("Your profile is created and you can now log in"));
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