
function addUser() {
    var user_name = document.getElementById("user_name").value;
    var password = document.getElementById("password").value;
  
    var credentials = {
      pranavna: "pranav04",
      jamiez: "jamie",
      aryandi: "aryan",
      aryavh: "aryav",
      krishh: "krish"
      
    };
  
    if (credentials.hasOwnProperty(user_name) && credentials[user_name] === password) {
      localStorage.setItem("user_name", user_name);
      window.location.href = "pg2index.html";
      console.log("Authentication successful!");
    } else {
      localStorage.removeItem("user_name");
      window.location.href = "index.html";
      console.log("Authentication failed!");
    }
  }
  
