//CREATE AN ACCOUNT

// Function called in Create.html to create a new user 
function saveData(){

    //All the data that has been typed by the user is gathered and given varibles
    let firstname = document.getElementById ("firstname").value;
    let lastname = document.getElementById ("lastname").value;
    let email = document.getElementById ("email").value;
    let phone = document.getElementById ("phone").value;
    let signUpUser = document.getElementById ("signUsername").value;
    let signUpPass = document.getElementById ("signPassword").value;
    let interest = document.getElementById ("interest").value;
    let dob = document.getElementById ("dob").value;
    let gender = document.getElementById ("gender").value;
    
//setting up the new user to be sent to the endpoint 
const user = {
        email: email,
        username: signUpUser,
        password : signUpPass,
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        interest: interest,
        dob: dob,
        gender: gender,

    };
// method pointing at /User/register endpoint
    fetch("http://localhost:3000/User/", {
        method: "POST", //POST method as we are sending data and creating a new method
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // the user that was created above is made to a JSON string
        
    })
    .catch (err => {
        throw (err),
        window.location = "Login.html"// when You have created an account you are redirected to the login page 
    });
    
};