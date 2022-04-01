`use strict`
//////////Register Form //////////////////////////////////////
let registerForm=document.getElementById("registerForm");
let userName=document.querySelector("userName");
let registerEmail=document.querySelector("registerEmail");
let registerPass=document.querySelector("registerPass");
let registerConfPass=document.querySelector("registerConfPass");

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
    document.querySelector(input).style.display="none";
    document.querySelector("subdive").style.display="block";

}

function validation(userName,registerEmail,registerPass,registerConfPass) {
     userName=document.querySelector("userName");
     registerEmail=document.querySelector("registerEmail");
     registerPass=document.querySelector("registerPass");
     registerConfPass=document.querySelector("registerConfPass");


    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /[A-Za-z]+$/;
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let capital=/[A_Z]/;

    // if(userName=='')
    
    //     alert('Please enter your first userName');
    
    // else if(!letters.test(userName))
    
    //     alert('First name field required only alphabet characters');
    
    
    // else if(registerEmail=='')
    
    //     alert('Please enter your user registerEmail id');
    
    // else if (!filter.test(registerEmail))
    
    //     alert('Invalid registerEmail');
    
    // else if(registerPass=='')
    
    //     alert('Please enter Password');
    
    // else if(!pwd_expression.test(registerPass) && !capital.test(pwd[0]))

    //     alert('Password should start with capital letter and indicate letters,numbers,symbols');

    
    // else if(registerConfPass === registerPass)
    
    //     alert('Password dont match');
    
        transpert()
}



