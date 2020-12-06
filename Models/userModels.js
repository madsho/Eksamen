//MODEL TO ARRANGE THE DATA WHEN A USER CREATES AN ACCOUNT

//When using fetch it worked when this was added to the model file
const express = require('express');

//construtor is used so other types of classes can be made easily (payed users)
class User { //Super class
    constructor (email, username ,password, firstName, lastName, phone, interest, dob, gender, dislike, like){
        this.email = email
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.phone = phone
        this.interest = interest
        this.dob = dob
        this.gender = gender
        this.dislike = dislike
        this.like = like
        }
        //Age calculator so the website keeps updating the users age
};


module.exports = User;
//


