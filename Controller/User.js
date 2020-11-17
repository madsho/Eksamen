const router = require("../Frontend/index")

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


// bliver kaldt fra routes