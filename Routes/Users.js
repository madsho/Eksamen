
const userRoutes = (app, fs) => {
    // variables
    const dataPath = './Database/users.json';
  
    const readFile = (
        callback,
        returnJson = false,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.readFile(filePath, encoding, (err, data) => {
          if (err) {
            throw err;
          }
    
          callback(returnJson ? JSON.parse(data) : data);
        });
      };
    
      const writeFile = (
        fileData,
        callback,
        filePath = dataPath,
        encoding = 'utf8'
      ) => {
        fs.writeFile(filePath, fileData, encoding, err => {
          if (err) {
            throw err;
          }
    
          callback();
        });
      };
    
      // READ
      // Notice how we can make this 'read' operation much more simple now.
      app.get('/users/:id', (req, res) => {
        const userId = req.params['id'];
        readFile(data => {
          res.send(data[userId]);
        }, true);
      });
    
    //Create
    app.post('/users', (req, res) => {
    
        readFile(data => {
          const newUserId = Object.keys(data).length + 1;
         
          // add the new user
          data [newUserId] = req.body;
      
          writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).json ({
              message: 'new user added',
              user: data[newUserId]
            });
          });
        }, true);
      });
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

    };
    
  
  module.exports = userRoutes;