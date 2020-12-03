
// API .fetch .then .catch

function saveData(){

    let firstname = document.getElementById ("firstname").value
    let lastname = document.getElementById ("lastname").value
    let email = document.getElementById ("email").value
    let phone = document.getElementById ("phone").value
    let signUpUser = document.getElementById ("signUsername").value
    let signUpPass = document.getElementById ("signPassword").value
    let interest = document.getElementById ("interest").value
    let dob = document.getElementById ("dob").value
    let gender = document.getElementById ("gender").value
    

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