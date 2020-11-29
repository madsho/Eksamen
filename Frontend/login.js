signUpUser = document.getElementById (signUsername)
signUpPass = document.getElementById (signPassword)

data = {"username": signUsername, "password": signUpPass}

// API .fetch .then .catch
function saveData(){
    fetch("http://localhost:5000/Users/register" , {
        method: "POST",
        headers: {
            "Content - Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log("sucess", data);
        localStorage.setItem(data)
    }).catch (err => {
        console.log(err)
    });

}