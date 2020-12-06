
//update

function updateProfile(){
    let userUpdate = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    let userUp = JSON.parse(userUpdate);
    //console.log(userInt.interest); 

    let firstname = document.getElementById ("firstname").value;
    let lastname = document.getElementById ("lastname").value;
    let email = document.getElementById ("email").value;
    let phone = document.getElementById ("phone").value;
    let password = document.getElementById ("Password").value;

    
    const user = {
            username: userUp.username,
            email: email,
            password : password,
            firstName: firstname,
            lastName: lastname,
            phone: phone
            
    
        };
   // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch("http://localhost:3000/User/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
            
        }).then (response => response.json ())
        .then(data =>{
          localStorage.setItem ("access granteded", JSON.stringify(data)) //if the password and username is correct the users deatails are stored in the localstorage with the key "acces granted"

      })
        .catch (err => {
            throw (err)
            
        });
        
    };