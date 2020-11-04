//Local storage
var name = document.getElementById(firstname);


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
  // export til Routes -> controller 