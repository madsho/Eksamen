  
const express = require('express');
const router = express.Router();

class User { //Super class
    constructor (id, email, username ,password, firstName, lastName, phone, interest, dob, gender){
        this.id = id
        this.email = email
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.interest = interest
        this.dob = dob
        this.gender = gender
        
        }
        //Age calculator so the website keeps updating the users age
};


module.exports = User
//


