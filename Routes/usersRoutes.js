//1 lOGIN
//2 CREATE A USER
//3 UPDATE A USER 
//4 DELETE A USER
const express = require ("express");
const router = express.Router();

let user = require ("../Controller/userController");
   
//1 lOGIN
    router.post("/login", user.loginUser);
//2 CREATE A USER
    router.post('/', user.createUser);
//3 UPDATE A USER 
    router.post('/update', user.updateUser); 
//4 DELETE A USER
    router.delete('/delete', user.deleteUser);


  module.exports = router; 