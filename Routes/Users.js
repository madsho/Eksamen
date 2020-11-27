
const userRoutes = (app, fs) => {
    // variables
    const dataPath = "./Database/Users/"
    
      // READ
  
      app.get('/users/:id', (req, res) => {
        const userId = req.params['id'];
        fs.readFile(dataPath, "utf8", (err, data) => {
          if (err){
            throw err;
          
        }
        res.send(JSON.parse (data));
      });
    });


    const userModel = require("../Models/Users.js");
    //Create
    function saveData(){
    app.post('/users', (req, res) => {
       
         const newid = Date.now().toString()
         const newuser = new userModel.userClass(
           email = req.body.email,
           username= req.body.username,
           password = req.body.password,
           firstName = req.body.firstname,
           lastName = req.body.lastname,
           dob = req.body.dob,
           gender = req.body.gender,
        );

        users = JSON.stringify(newuser, null, 2)
      
          fs.writeFile(dataPath + newid + ".json", users, (err) => {
            if (err) throw err;
            res.status(200).json({
              message: 'new user added',
              
            });
          });
        });

      };


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