function checkpassword_pranavpage()
{   
     var passforroom1 = document.getElementById("passforroom1").value;

    if(passforroom1 === "room1test") {
        localStorage.setItem("passforroom1", passforroom1);
        window.location = "pranav.html";
        console.log("You're good to go!")
    }
    else {
        localStorage.setItem("passforroom1", passforroom1);
        window.location = "pg2index.html";
        console.log("You're not good to go!")
    }
}

