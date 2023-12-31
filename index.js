let get_form = document.getElementById('forms');


console.log(get_form.action);


console.log(document.forms.action);
console.log(get_form);

get_form.addEventListener('submit', async(e) => { 
    
  console.log('signUpValidation called');
    e.preventDefault(); 
    const validation_result = await formValidation();
    if(validation_result) {
    get_form.submit();
   window.location("action.html");
        // window.location= "action.html";
      //  window.location = "/submit.html"
      console.log("action.html");
    } 
});



console.log(get_form.action);


class Validator {
  constructor(emailField, passwordField, get_form) {

      this.emailField = emailField;
      this.passwordField = passwordField;
      this.emailError = emailField.nextElementSibling;
      this.passwordError = passwordField.nextElementSibling;
      this.get_form = get_form;
      this.check = true;

  }

 async validateFields() {
      
      this.check = true;

      if (this.emailField.value === '' || !this.emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          this.setError(this.emailError, 'Enter email.');
          this.check = false;
      } else {
          this.clearError(this.emailError);
      }

      if (this.passwordField.value === '') {
          this.setError(this.passwordError, 'Enter password.');
          this.check = false;
      } else {
          this.clearError(this.passwordError);
      }
      if(this.check) {
        
        const get_local_data = await JSON.parse(localStorage.getItem('userData'));
        
        if(get_local_data) {
          
          const input_email = this.emailField.value;
          const input_password = this.passwordField.value;

          const get_user = await get_local_data.find(user=> input_email === user.user_email && input_password === user.user_password)

            if(get_user) {
              this.check = true;
            }else {
              this.setError(this.emailError, 'Enter valid email');
              this.setError(this.passwordError, 'invalid password');
              this.check = false;
            }
        
        } else {

          alert('you are not register signup first');
            this.check = false;    
            return this.check;
                
        }
        if(this.check) {
         
          setTimeout(()=> {
            this.get_form.reset();
           },1000);
           
          let toastSuccess = document.getElementById('toast-success');
          
          toastSuccess.style.display = 'block';
          setTimeout(() => {
              toastSuccess.style.display = 'none';
          }, 2000);

          

        }
          
         return this.check;
         clearError();
      
      
      }
  
  
    }

  setError(element, message) {
      element.textContent = message;
  }

  clearError(element) {
      element.textContent = '';
  }

}

function formValidation() {

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const validator = new Validator(emailField, passwordField, get_form);
  return validator.validateFields();
}