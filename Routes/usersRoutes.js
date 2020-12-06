const express = require ("express");
const router = express.Router();

let user = require ("../Controller/userController")
   
    //login
    router.post("/login", user.loginUser);
    //Create user 
    router.post('/', user.createUser);
    //Update user
    router.post('/update', user.updateUser); 
    //Delte user
    router.delete('/delete', user.deleteUser)

//export to app.js
  module.exports = router; 