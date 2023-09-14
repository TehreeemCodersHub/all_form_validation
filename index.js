


//for preventing default behaviour of form

let get_form = document.getElementById('forms');

get_form.addEventListener('submit', (e) => { 
    e.preventDefault();

    clearError(first_name);
    clearError(password1);
    clearError(user_email);
    
    formValidation();
});


function setError(element, msg) {

  let element_parent = element.parentElement;
  let child_error = element_parent.querySelector('span');
  child_error.innerHTML = msg;
  child_error.classList.add('error-color');
  element.classList.add('red-border');

}


function clearError(element) {
  let element_parent = element.parentElement;
  let child_error = element_parent.querySelector('span');
  child_error.innerHTML = '';
   child_error.classList.remove('error-color');
  element.classList.remove('red-border');
}



function formValidation() {
    
    let set_validator = true;
    
    let password1 = document.getElementById('password');
    let user_email = document.getElementById('email');

    

    
      
      if (password1.value == '') {
        setError(password1, 'Enter password');
        set_validator = false;
      } else if(password1.value.length <= 8 ) {
          setError(password1, 'password length should be larger then 8');
          set_validator = false;
      }else {
          clearError(password1);
      }
    
    
      if (user_email.value == '') {
        setError(user_email, 'Enter email');
        set_validator = false;
      }else if((!user_email.value.match( /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/ )) ) {
        setError(user_email, 'Enter valid email');   
        set_validator = false;
      }
       else {
        clearError(user_email);
      }
      
      if (set_validator) {
           
       document.getElementById("forms").reset();
      
         
    }
    return set_validator;
    
}  


// now working on form 2 validation
