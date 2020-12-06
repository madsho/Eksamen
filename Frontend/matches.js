//TABLE OF ALL MATCHES

//When mathces.html is loaded the following function will run
document.addEventListener("DOMContentLoaded", function() {
    
    // The user is operating the website / the person liking 
    let user = window.localStorage.getItem('access granteded');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let userInfo = JSON.parse(user);//The data recived from localstorage is parsed



   // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch("http://localhost:3000/Match/confirmMatch", { //show the route /Match/confirmMatch in matchRoutes.js
        method: "POST", //POST requests 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo), //sends the users information to the endpoint 

    }).then (response => response.json ())
    .then(data =>{
        let table = document.getElementById("listOfMatch"); //the table recieved from matches.html
        let html = "";
        let userKeys = Object.keys(data); //lists all the keys 
        let userValues = Object.values(data); // lists all the values for that key 

//loop to deiplay in at table
        let j = 0 // Starts at 0 from the first name recieved by the endpoint
        for (let i of userKeys) { //for loop that makes a new row for every i/userkey with its value 
       html += "<tr><td>" + i + " User: "+ "</td><td>" + userValues[j] + "</td></tr>" 
         j += 1 //increment the name displayed by one everytime the a new row is made
    }
      table.innerHTML = html;

    })
    .catch (err => {
            throw (err)
        
    }); 
});


function deleteMatch(){

    let inputDelete = document.getElementById("deleteInput").value;
    let user = window.localStorage.getItem('access granteded');//Gets the information on who  is logged in on the "access granted" key in localstorage
    let userInfo = JSON.parse(user);  //The data recived from localstorage is par
    
    const userDelete = {
        userDel: inputDelete,
        user: userInfo.username
    }


// fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch("http://localhost:3000/Match/deletematch", { //show the route /Match/confirmMatch in matchRoutes.js
method: "POST", //POST requests 
headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify(userDelete), //sends the users information to the endpoint 

}).then (response => response.json ())
.then(data =>{
    console.log(data);
    window.location.reload();
})
.catch (err => {
    throw (err)

});

};