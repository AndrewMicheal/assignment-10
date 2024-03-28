var locationPath = window.location.pathname;

if(localStorage.getItem("isLogin") != "true") {
    // window.open('/index.html' , "_self");
    window.location.href = locationPath.replace("/home" , "/index");
}


var btnLogOut = document.querySelector("btnLogOut");
var welcome = document.querySelector("#welcome");
var userName = JSON.parse(localStorage.getItem("user")).name;

welcome .innerHTML += ` ${userName}`;

function logOut() {
    localStorage.setItem("isLogin" , "false");
    window.open('/index.html' , "_self");
}