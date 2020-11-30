
function logOut(){
    window.localStorage.clear();
    window.location = "Create.html";
}

function deleteProfile(){
    
    let userDelete = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    console.log(userDelete);
    var username = JSON.parse(userDelete)
    console.log(username.username);

// Vi har ingen body, eftersom at vi ikke skal have noget tilbage --> vi sletter noget
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


//uge 38 vejl løsning
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