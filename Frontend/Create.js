
// API .fetch .then .catch

function saveData(){

var firstname = document.getElementById ("firstname")
var lastname = document.getElementById ("lastname")
var email = document.getElementById ("email")
var phone = document.getElementById ("phone")
var signUpUser = document.getElementById ("signUsername")
var signUpPass = document.getElementById ("signPassword")
var interest = document.getElementById ("interest")
var dob = document.getElementById ("dob")
var gender = document.getElementById ("gender")
    

const user = {
        email: email.value,
        username: signUpUser.value,
        password : signUpPass.value,
        firstName: firstname.value,
        lastName: lastname.value,
        phone: phone.value,
        interest: interest.value,
        dob: dob.value,
        gender: gender.value
    };
    console.log(user)

    fetch("http://localhost:3000/User/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).catch (err => {
        throw (err)
    });

}