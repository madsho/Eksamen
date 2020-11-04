const router = require("../Routes/Users")

function saveData() {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem();
    localStorage.setItem();
    localStorage.setItem();
    alert('data added in localstorage');
  } else {
    alert('local storage not supported');
  }
}

// bliver kaldt fra routes