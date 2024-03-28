var userName = document.querySelector(".name");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var btnSiginUp = document.querySelector(".btnSiginUp");
var errMsg = document.querySelector(".errMsg");
var inputs = document.querySelectorAll(".form-control");
var usersData;
var emailErrMsg = document.querySelector(".emailErrMsg");
var isFound = false;

if(localStorage.getItem("users") != null) {
    usersData = JSON.parse(localStorage.getItem("users"));
} else {
    usersData = [];
}

function addUser() {
    if(userName.value == "" && password.value == "" && email.value == "") {
        errMsg.classList.replace("d-none" , "d-block");
        return;
    }
    if(isUserExists()) {
        emailErrMsg.classList.replace("d-none" , "d-block");
        isFound = false;
        return;
    }
    var user = {
        name : userName.value ,
        email : email.value ,
        password : password.value
    }
    usersData.push(user);
    localStorage.setItem("users" , JSON.stringify(usersData));
    errMsg.classList.replace("d-block" , "d-none");
    emailErrMsg.classList.replace("d-block" , "d-none");
    clearInputs();
    goToSignIn();
}

function isUserExists() {
    if(usersData.length <= 0)
        return;
    
    for(var i = 0; i < usersData.length; i++) {
        if(usersData[i].email.toLowerCase() == email.value.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    return isFound;
}

function goToSignIn() {
    window.open("./index.html" , "_self");
}

function clearInputs() {
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

btnSiginUp.addEventListener("click" , function() {
    addUser();
})