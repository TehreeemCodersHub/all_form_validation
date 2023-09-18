let email_reg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
let name_reg = /^[a-zA-Z]*$/;
signup_form = document.getElementById('sign-up-form');

let data = document.getElementById('fname').value;
let fn_error = document.getElementById('fname').nextElementSibling;


signup_form.addEventListener('submit', (e) => { 

        console.log('signUpValidation called');
        
        e.preventDefault();   
        
        

});





signUpValidation();
   

function showToast() {
    
    setTimeout(()=> {
        document.getElementById("sign-up-form").reset();
     },3000);
     
    let toastSuccess = document.getElementById('toast-success');
    toastSuccess.style.display = 'block';
    setTimeout(() => {
        toastSuccess.style.display = 'none';
    }, 4000);
}

// signUpValidation();

function signUpValidation() {
    
    let validate = true;

    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let get_email = document.getElementById('email');
    let password = document.getElementById('password').value;
    let copassword = document.getElementById('cpassword').value;

    // Fetch error spans
    let fnameError = document.getElementById('fname').nextElementSibling;
    let lnameError = document.getElementById('lname').nextElementSibling;
    let emailError = document.getElementById('email').nextElementSibling;
    let passwordError = document.getElementById('password').nextElementSibling;
    let copasswordError = document.getElementById('cpassword').nextElementSibling;

    
    function clearError() {
        
        fnameError.innerHTML = '';
        lnameError.innerHTML = '';
        emailError.innerHTML = '';
        passwordError.innerHTML = '';
        copasswordError.innerHTML = '';
    }
    clearError();

    window.addEventListener("load", () => {
        clearError();
    }); 

    if (fname === '' || !name_reg.test(fname)) {
        fnameError.innerHTML = 'Enter a valid first name';
        validate = false;
    }

    if (lname === '' || !name_reg.test(lname)) {
        lnameError.innerHTML = 'Enter a valid last name';
        validate = false;
    }

    if (email === '' || !email_reg.test(email)) {
        emailError.innerHTML = 'Enter a valid email address';
        validate = false;
    }

    if(password.length <= 6) {
        passwordError.innerHTML = "Password must be at least six characters";
        validate = false;
    }

    if (password === '' ) {
        passwordError.innerHTML = 'Enter a password';
        validate = false;
    }
    
    if (copassword === '') {
        copasswordError.innerHTML = 'Confirm your password';
        validate = false;
    }

    if (password !== copassword) {
        passwordError.innerHTML = 'Passwords do not match';
        copasswordError.innerHTML = 'Passwords do not match';
        validate = false;
    }

    if(validate) {

        console.log("i am true");
        let get_obj = [];
        let obj_one = {first_name: fname, last_name: lname, user_email: email, user_password: password,user_copassword: copassword}

        if (localStorage.getItem('userData')) {
            
            get_obj = JSON.parse(localStorage.getItem('userData'));
            
                for (let record in get_obj ) {
                    
                    if(email === get_obj[record].user_email) {
                        emailError.innerHTML='Email already exist';
                        validate = false;
                        break;
                        
                    }        
                } 

            if(validate) {
                get_obj.push(obj_one);
                localStorage.setItem('userData', JSON.stringify(get_obj));
                clearError();
                showToast();
            }

        }else {
            get_obj.push(obj_one);
            localStorage.setItem('userData', JSON.stringify(get_obj));
            showToast();
        }
   
        return validate;
        clearError();
    }
}


// custom toast 
// https://www.codehim.com/vanilla-javascript/simple-toast-notification-in-javascript/