
//update

function updateProfile(){
    let userUpdate = window.localStorage.getItem('access granteded'); // får vores LocalStorage Key
    //console.log(userInterest);
    let userUp = JSON.parse(userUpdate)
    //console.log(userInt.interest); 

    let firstname = document.getElementById ("firstname").value
    let lastname = document.getElementById ("lastname").value
    let email = document.getElementById ("email").value
    let phone = document.getElementById ("phone").value
    let password = document.getElementById ("Password").value
    let interest = document.getElementById ("interest").value
    let gender = document.getElementById ("gender").value
        
    
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
   // fetch API is run https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch("http://localhost:3000/User/update", {
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