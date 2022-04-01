`use strict`
//////////Register Form //////////////////////////////////////


let userinfo=[];
// function register(userName) {
    
// }
// registerForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//   let   name=event.target.userName.value;
//   let  mail=event.target.registerEmail.value;
//   let  password=event.target.registerPass.value;
  

// validation(name,mail,password);
    
// })
function transpert() {
   document.querySelector(button).style.display="none";
   document.querySelector("subdive").style.display="block";

}

function validation() {

    let  userName=document.getElementById("userName").value;
    let registerEmail=document.getElementById("registerEmail").value;
    let registerPass=document.getElementById("registerPass").value;
    let registerConfPass=document.getElementById("registerConfPass").value;
    // let but=document.querySelector(button).value;
    // let div=document.querySelector("subdive").value;

    
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let capital=/[A_Z]/;

if (userName == "") 
    alert("User name required");

else if (!letters.test(userName)) 
    alert("User name should only have alphapatic letters");

else if (!filter.test(registerEmail))
    alert("Email should be like this example@example.com");

else if (registerPass == "")
    alert("Password must contain capital and small letters,numbers and a symbol");

else if (!pwd_expression.test(registerPass))
    alert("Password must contain capital and small letters,numbers and a symbol");

else if (registerConfPass != registerPass)
    alert("Email should be like this example@example.com");

transpert();
}



