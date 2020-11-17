//Local storage
var Firstname = document.getElementById("firstname");
var LastName = document.getElementById("lastname");
var Email = document.getElementById("email");
var Phone = document.getElementById("phone");
var SignUserName = document.getElementById("signUsername");
var SignPassWord = document.getElementById("signPassword");


function saveData() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('name',JSON.stringify([Firstname.value,LastName.value,Email.value, Phone.value, SignUserName.value, SignPassWord.value]));
    alert('Your login has been approved and you can now log in');
  } else {
    alert('local storage not supported');
}; 
}