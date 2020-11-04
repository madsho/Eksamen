//Local storage
var Firstname = document.getElementById("firstname");
var LastName = document.getElementById("lastname");
var Email = document.getElementById("email");
var Phone = document.getElementById("phone");
var SignUserName = document.getElementById("signUsername");
var SignPassWord = document.getElementById("signPassword");

function saveData() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('name',Firstname.value);
    localStorage.setItem('Lastname',LastName.value);
    localStorage.setItem('Email', Email.value);
    localStorage.setItem('Phone', Phone.value);
    localStorage.setItem('UserName', SignUserName.value);
    localStorage.setItem('Password', SignPassWord.value);
    alert('data added in localstorage');
  } else {
    alert('local storage not supported');
}; 
}
