document.addEventListener("DOMContentLoaded", function() {
    
    let userInterest = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    let userInt = JSON.parse(userInterest)
    //console.log(userInt.interest);



    fetch("http://localhost:3000/User/register/confirmMatch/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInt),

    }).then (response => response.json ())
    .then(data =>{
        let table = document.getElementById("listOfMatch");
        let html = "";
        alert ("Your have a match with " +  data.firstName)

        let userKeys = Object.keys(data);
        let userValues = Object.values(data);
        
        let j = 0
    for (let i of userKeys) {
        html += "<tr><td>" + i + "</td><td>" + userValues[j] + "</td></tr>";
        j += 1
    }
     
    
      table.innerHTML = html;
  
  
    })
    .catch (err => {
            throw (err)
        
    }); 
});