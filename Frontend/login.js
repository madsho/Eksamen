

function login (){



let username = document.getElementById ("username")
let password = document.getElementById ("passsword")

let loginInfo = {
    username: username.value,
    password: password.value,
}


// API .fetch .then .catch
    
    fetch("http://localhost:3000/User/register/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginInfo),

    }).then (response => response.json ())
      .then(data =>{
        console.log ("Sucsess logged in", data);
        localStorage.setItem ("access granteded", JSON.stringify(data))
        window.location = "homepage.html"

    })
    .catch (err => {
            console.log("cant log in")
    });

}
