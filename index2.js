let email_reg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
let name_reg = /^[a-zA-Z]*$/;

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');
let signup_form = document.getElementById('sign-up-form');



signup_form.addEventListener('submit', (e) => { 
    e.preventDefault();

    
    signUpValidation();
});

function signUpValidation() {
    let elementArray= [];
    const sed_obj = [email.value,password.value]
    
    elementArray.push(sed_obj);
    console.log(elementArray); 


}

