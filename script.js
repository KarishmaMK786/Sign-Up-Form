
function myFunction() {

// Retrieving Data
let uid = document.getElementById("username").value;
let pw= document.getElementById("password").value;
let email = document.getElementById("email").value;

// Storing data
let user = localStorage.setItem("uid", uid);
let pass = localStorage.setItem("pw", pw);
let ema = localStorage.setItem ("email", email)

//  Retreiving stored data and using it for calculation
let use = localStorage.getItem("uid", uid);
let pas = localStorage.getItem("pw", pw);
let em = localStorage.getItem ("email", email);

let a, b, c;
a = "Karishma Khondunaik";
b = "Kempi@786";
c = "matazkk786@gmail.com";

if(a === use && b === pas && c === em){
    alert("Login Successfull");
}else{
    alert("Invalid details")
}

}

