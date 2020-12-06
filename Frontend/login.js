// LOG IN TO AN ACCOUNT 

function login(){

    let username = document.getElementById ("username").value; //getting the data put in by the user 
    let password = document.getElementById ("password").value;

 // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/User/login/", {
        method: "POST",//POST request
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([username,password]), // sends the username and password typed in by the user in an array

    }).then (response => response.json ())
      .then(data =>{
        localStorage.setItem ("access granteded", JSON.stringify(data)) //if the password and username is correct the users deatails are stored in the localstorage with the key "acces granted"
        
        alert ("Username or passwoord correct. Welcome back " + username) // An alert to greet the user 
        window.location = "homepage.html" //if the password is correct the user will be sent to the hompage.html
    })
    .catch (err => { //if password or username are wrong the following will happen:
            alert ("Username or passwoord is incorrect") //An alert to let the user know what happended
            window.location = "Login.html" // The user will be redirected to the login page. if this wasn't here the screen will become white
            throw (err)
    });

};

