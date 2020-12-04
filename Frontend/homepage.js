//1 LOGOUT AND DELETE
//2 WHEN PAGE IS RELOADED
//3 LIKE, DISLIKE AND ALERT WHEN MATCHED


// 1 LOG OUT AND DELETE
//Log out function
function logOut(){
    window.localStorage.clear(); // clear the localstorage so the user has to log in to access the hompage again
    window.location = "Login.html"; // takes the user to the login page
}


//Delete profile 
function deleteProfile(){
    
    let userDelete = window.localStorage.getItem("access granteded"); //Gets the information on who to delete by looking at who is logged in on the "access granted" key in localstorage
   
    let username = JSON.parse(userDelete) //The data recived from localstorage is parsed

 // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/User/delete/",{ //specificed to /User/delete route in usersRoutes.js
    method: 'DELETE', //specify which method to use 
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(username), //send the username which is used to find the correct file to delete

}).then(() => {
    alert ("Your acount has been deleted") //alert to let the user know that thier account has been deleted 
    
 }).catch(err => { //Handles errors that could occur and display them in the console
   console.error(err)
 });
 window.location = "Create.hmtl"; //user is redirected to the create page
}


// 2 WHEN PAGE IS LOADED

//Uge 38 vejl løsning 
document.addEventListener("DOMContentLoaded", function() { //when the DOM/page is loaded then this function will run
    
    let user = JSON.parse(localStorage.getItem("access granteded")) //Gets the information on who is logged in on the "access granted" key in localstorage. The values are parsed so they can be read and arranged in the table
    let table = document.getElementById("userTabel"); //Defines the table set up on homepage.html
    let html = ""; //Sets the variable html to and empty string so the table can be added onto this 
  
    html += "<tr><td>" + "ID:" + "</td><td>" + user.id + "</td></tr>"; //Every row is added without a loop så the variables like and dislike is not shown
    html += "<tr><td>" + "Email:" + "</td><td>" + user.email + "</td></tr>";
    html += "<tr><td>" + "Username:" + "</td><td>" + user.username + "</td></tr>";
    html += "<tr><td>" + "Password:" + "</td><td>" + user.password + "</td></tr>";
    html += "<tr><td>" + "Firstname:" + "</td><td>" + user.firstName + "</td></tr>";
    html += "<tr><td>" + "Lastname:" + "</td><td>" + user.lastName + "</td></tr>";
    html += "<tr><td>" + "Phone:" + "</td><td>" + user.phone + "</td></tr>";
    html += "<tr><td>" + "Interested in:" + "</td><td>" + user.interest + "</td></tr>";
    html += "<tr><td>" + "Date of Birth:" + "</td><td>" + user.dob + "</td></tr>";
    html += "<tr><td>" + "Your gender:" + "</td><td>" + user.gender + "</td></tr>";

  table.innerHTML = html; //the table constructed is exported to homepage.hml

});


//Show a user that can be liked og disliked = a potentiel user
document.addEventListener("DOMContentLoaded", function() {//when the DOM/page is loaded then this function will run
    
    let userInterest = window.localStorage.getItem("access granteded"); //Gets the information on who  is logged in on the "access granted" key in localstorage
    let userInt = JSON.parse(userInterest) //The data recived from localstorage is parsed

    
 // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/Potmatch/", {//specificed to /Potmatch route in potMatchesRoutes.js
        method: "POST", //POST request
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInt), // sends the parsed data to the endpoint

    }).then (response => response.json ()) //A promise is returned and handled 
    .then(data =>{
        console.log ("matched with", data); 
        let table = document.getElementById("potMatch"); //Get a predetermined table from homepage.html where the potentiel match will be shown
        localStorage.setItem("userEvaluated", JSON.stringify(data.username)); //To know who is being shown and to future use when liking and disliking the username i stored i localstorage.
        //OBS! The whole user is now stored else you would be able to see their password and private details
       
        let html = "";


    
    html += "<tr><td>" + "Username:" + "</td><td>" + data.username + "</td></tr>"; // data is ad filed in. OBS! no sensitive og personel info 
    html += "<tr><td>" + "Firstname:" + "</td><td>" + data.firstName + "</td></tr>";
    html += "<tr><td>" + "Lastname:" + "</td><td>" + data.lastName + "</td></tr>";
    html += "<tr><td>" + "Interested in:" + "</td><td>" + data.interest + "</td></tr>";
    html += "<tr><td>" + "Date of birth:" + "</td><td>" + data.dob + "</td></tr>";
    html += "<tr><td>" + "Gender:" + "</td><td>" + data.gender + "</td></tr>";
 

  table.innerHTML = html; // Table is exported to hompage.html page
  
    })
    .catch (err => {
            throw (err) // if any errors they will be shown
        
    }); 
});


// 3 LIKING, DISLIKING AND ALERT WHEN MATCHED

//Dislike
function dislike(){

   // The user is operating the website 
    let userInterest = window.localStorage.getItem('access granteded');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let useroperator = JSON.parse(userInterest)//The data recived from localstorage is parsed

    // the user who is being evaluated (disliked or liked)
    let userEvaluated = window.localStorage.getItem('userEvaluated');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let userDisLiked = JSON.parse(userEvaluated)  //The data recived from localstorage is parsed
 
 // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/Dislike/", {//specificed to /Dislike route at dislikeRoute.js
        method: "POST", //POST request 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([useroperator, userDisLiked]), //Sends info gathered about the two users

    }).then (response => response.json()) //Handles the promise
    .then (data =>{
        
    })
    .catch (err => {
            throw(err),
            window.location.reload() // When the dislike button is pressed then the page is realoded so the Function above where it will shows a poteniel match is run again 
        
    });
   
}

//Like function 
function like(){
   
     // The user is operating the website 
     let userInterest = window.localStorage.getItem('access granteded');//Gets the information on who  is logged in on the "access granted" key in localstorage
     let useroperator = JSON.parse(userInterest)//The data recived from localstorage is parsed
 
   
    // the user who is being evaluated (disliked or liked)
    let userEvaluated = window.localStorage.getItem('userEvaluated');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let userLiked = JSON.parse(userEvaluated)  //The data recived from localstorage is parsed
        
    // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/Like/", {//specificed to /like route at likeRoute.js
        method: "POST", //POST request
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([useroperator, userLiked]), //Sends info gathered about the two users

    }).then (response => response.json()) //handlels the promise
    .then (data =>{
        matchedAlert(), //runs the like alert 
        window.location.reload() // When the like button is pressed then the page is realoded so the Function above where it will shows a poteniel match is run again 
        
    }).catch (err => {
            throw (err)
    });

}


//Alert if match function
function matchedAlert(){

    // The user is operating the website / the person liking 
    let userOp = window.localStorage.getItem('access granteded');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let userLiking = JSON.parse(userOp)//The data recived from localstorage is parsed

   // the user who is being evaluated (liked) who also liked back
   let userEvaluated = window.localStorage.getItem('userEvaluated');//Gets the information on who  is logged in on the "access granted" key in localstorage
   let userLiked = JSON.parse(userEvaluated)  //The data recived from localstorage is parsed
    

   // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/Like/likeAlert/", {//specificed to /Like/likealert route at likeRoute.js
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify([userLiking, userLiked]), //Sends info gathered about the two users

    }).then (response => response.json ()) 
    .then (data =>{
        if (data.length < 1){ //If-statement dertimening if the length of the array recived is above og below 1 
        console.log("no match") // If below then the person hasn't liked you yet and therefore no alert 
    }else{
        alert("You have matched with " + Object.values(data) + " !!") //if above 1 then there is an alert as the person has liked you back
    }
    })
    .catch (err => {
            throw (err)
        
    });
}
