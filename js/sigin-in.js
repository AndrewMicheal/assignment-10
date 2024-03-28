var email = document.querySelector(".email");
var password = document.querySelector(".password");
var btnLogin = document.querySelector("#btnLogin");
var getUserData;
var isFound = false;
var isPasswordInputCorrect = false;
var userData;
var errMsg = document.querySelector(".errMsg");

if(localStorage.getItem("users") != null) {
    getUserData = JSON.parse(localStorage.getItem("users"));
} else {
    getUserData = [];
}


btnLogin.addEventListener("click" , function() {
    if(!isUserFound()) {
        errMsg.classList.replace("d-none" , "d-block");
        return;
    }
    signIn()
})

function isUserFound() {    
    for(var i = 0; i < getUserData.length; i++) {
        if(getUserData[i].email.toLowerCase() == email.value.toLowerCase() && getUserData[i].password.toLowerCase() == password.value.toLowerCase()) {
            isFound = true;
            userData = getUserData[i];
            break;
        }
    }
    return isFound;
}
function signIn() {
    localStorage.setItem("user" , JSON.stringify(userData));
    localStorage.setItem("isLogin" , "true");
    window.open("./home.html" , "_self")
}