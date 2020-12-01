

//logge ud 
function logOut(){
    window.localStorage.clear();
    window.location = "Create.html";
}


//delete profile 
function deleteProfile(){
    
    let userDelete = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    console.log(userDelete);
    var username = JSON.parse(userDelete)
    console.log(username.username);

    fetch("http://localhost:3000/User/register/delete/",{
    method: 'DELETE',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(username),

}).then(() => {
    console.log('deleted');
    
 }).catch(err => {
   console.error(err)
 });
 window.location = "Login.hmtl";
}


//uge 38 vejl løsning // display af data
document.addEventListener("DOMContentLoaded", function() {
    
    var user = JSON.parse(localStorage.getItem('access granteded'))
    let table = document.getElementById("userTabel");
    let html = "";
    let userKeys = Object.keys(user);
    let userValues = Object.values(user);

    var j = 0
for (let i of userKeys) {
    html += "<tr><td>" + i + "</td><td>" + userValues[j] + "</td></tr>";
    j += 1
}
 

  table.innerHTML = html;

});


//Put skal kunne opdatere 
function updateProfile(){
    var firstname = document.getElementById ("firstname").value
    var lastname = document.getElementById ("lastname").value
    var email = document.getElementById ("email").value
    var phone = document.getElementById ("phone").value
    var signUpPass = document.getElementById ("Password").value
    var interest = document.getElementById ("interest").value
    var gender = document.getElementById ("gender").value
    
    let userUp = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    console.log(userUp);
    var username = JSON.parse(userUp)
    console.log(username.username);

    const updatedUser = {
        email: email,
        password : signUpPass,
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        interest: interest,
        gender: gender,
    };
    console.log(updatedUser)

    fetch("http://localhost:3000/User/register/Update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
        body: JSON.stringify(username),
    }).catch (err => {
        throw (err)
    });
}


//Match for users

function potMatch(){
    
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    console.log(userInterest);
    var userInt = JSON.parse(userInterest)
    console.log(userInt.interest);

    fetch("http://localhost:3000/User/register/match/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInt),

    }).then (response => response.json ())
    .then(data =>{
        
        console.log ("matched with", data);
        let table = document.getElementById("potMatch");
        localStorage.setItem("userEvaluated", JSON.stringify(data.username))

    let html = "";


    
    html += "<tr><td>" + "Username:" + "</td><td>" + data.username + "</td></tr>";
    html += "<tr><td>" + "Firstname:" + "</td><td>" + data.firstName + "</td></tr>";
    html += "<tr><td>" + "Lastname:" + "</td><td>" + data.lastName + "</td></tr>";
    html += "<tr><td>" + "Interested in:" + "</td><td>" + data.interest + "</td></tr>";
    html += "<tr><td>" + "Date of birth:" + "</td><td>" + data.dob + "</td></tr>";
    html += "<tr><td>" + "Gender:" + "</td><td>" + data.gender + "</td></tr>";
 

  table.innerHTML = html;
    })
    .catch (err => {
            throw (err)
        
    }); 
};

//function dislike

function dislike(){
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    console.log(userInterest);
    var userInt = JSON.parse(userInterest)
    console.log(userInt.interest);
   
    let userEval = window.localStorage.getItem('userEvaluated'); // får vores LocalStorage Key
    console.log(userEval);
    var userDisLiked = JSON.parse(userEval)
    console.log(userDisLiked);
    

    fetch("http://localhost:3000/User/register/dislike/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([userInt, userDisLiked]),

    }).then (response => response.json ())
    .then(data =>{
        console.log ("matched with", data);
        let table = document.getElementById("potMatch");
    let html = "";


    
    html += "<tr><td>" + "Username:" + "</td><td>" + data.username + "</td></tr>";
    html += "<tr><td>" + "Firstname:" + "</td><td>" + data.firstName + "</td></tr>";
    html += "<tr><td>" + "Lastname:" + "</td><td>" + data.lastName + "</td></tr>";
    html += "<tr><td>" + "Interested in:" + "</td><td>" + data.interest + "</td></tr>";
    html += "<tr><td>" + "Date of birth:" + "</td><td>" + data.dob + "</td></tr>";
    html += "<tr><td>" + "Gender:" + "</td><td>" + data.gender + "</td></tr>";
 

  table.innerHTML = html;
    })
    .catch (err => {
            throw (err)
        
    });
}
