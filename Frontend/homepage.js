
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
  
 
    html += "<tr><td>" + "ID:" + "</td><td>" + user.id + "</td></tr>";
    html += "<tr><td>" + "Email:" + "</td><td>" + user.email + "</td></tr>";
    html += "<tr><td>" + "Username:" + "</td><td>" + user.username + "</td></tr>";
    html += "<tr><td>" + "Password:" + "</td><td>" + user.password + "</td></tr>";
    html += "<tr><td>" + "Firstname:" + "</td><td>" + user.firstName + "</td></tr>";
    html += "<tr><td>" + "Lastname:" + "</td><td>" + user.lastName + "</td></tr>";
    html += "<tr><td>" + "Phone:" + "</td><td>" + user.phone + "</td></tr>";
    html += "<tr><td>" + "Interested in:" + "</td><td>" + user.interest + "</td></tr>";
    html += "<tr><td>" + "Date of Birth:" + "</td><td>" + user.dob + "</td></tr>";
    html += "<tr><td>" + "Your gender:" + "</td><td>" + user.gender + "</td></tr>";

  table.innerHTML = html;

});


//Viser potentiel match
document.addEventListener("DOMContentLoaded", function() {
    
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    var userInt = JSON.parse(userInterest)
    //console.log(userInt.interest);



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
        localStorage.setItem("userEvaluated", JSON.stringify(data.username));
       
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
});


//function dislike
function dislike(){
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    var useroperator = JSON.parse(userInterest)
    //console.log(userInt.interest);
    
    let userEvaluated = window.localStorage.getItem('userEvaluated'); // får vores LocalStorage Key
    // console.log(userEval);
    var userDisLiked = JSON.parse(userEvaluated)
    // console.log(userDisLiked);
   
    fetch("http://localhost:3000/User/register/dislike/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([useroperator, userDisLiked]),

    }).catch (err => {
            throw(err)
        
    });
}

//function for at kunne dislike
function like(){
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    var useroperator = JSON.parse(userInterest)
    //console.log(userInt.interest);
   
    let userEvaluated = window.localStorage.getItem('userEvaluated'); // får vores LocalStorage Key
   // console.log(userEval);
    var userLiked = JSON.parse(userEvaluated)
   // console.log(userDisLiked);
    
   
    fetch("http://localhost:3000/User/register/like/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([useroperator, userLiked]),

    })
    .catch (err => {
            throw (err)
        
    });
  
}



//update

function updateProfile(){
    let userUpdate = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    var userUp = JSON.parse(userUpdate)
    //console.log(userInt.interest); 

    var firstname = document.getElementById ("firstname").value
    var lastname = document.getElementById ("lastname").value
    var email = document.getElementById ("email").value
    var phone = document.getElementById ("phone").value
    var password = document.getElementById ("Password").value
    var interest = document.getElementById ("interest").value
    var gender = document.getElementById ("gender").value
        
    
    const user = {
            email: email,
            password : password,
            firstName: firstname,
            lastName: lastname,
            phone: phone,
            interest: interest,
            gender: gender,
    
        };
        console.log(user)
    
        fetch("http://localhost:3000/User/register/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([user, userUp]),
            
        })
        .catch (err => {
            throw (err),
            window.location = "Login.html"
        });
        
    }