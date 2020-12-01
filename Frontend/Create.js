
// API .fetch .then .catch

function saveData(){

var firstname = document.getElementById ("firstname").value
var lastname = document.getElementById ("lastname").value
var email = document.getElementById ("email").value
var phone = document.getElementById ("phone").value
var signUpUser = document.getElementById ("signUsername").value
var signUpPass = document.getElementById ("signPassword").value
var interest = document.getElementById ("interest").value
var dob = document.getElementById ("dob").value
var gender = document.getElementById ("gender").value
    

const user = {
        email: email,
        username: signUpUser,
        password : signUpPass,
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        interest: interest,
        dob: dob,
        gender: gender,

    };
    console.log(user)

    fetch("http://localhost:3000/User/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        
    })
    .catch (err => {
        throw (err),
        window.location = "Login.html"
    });
    
}