let get_form = document.getElementById('forms');


get_form.addEventListener('submit', (e) => { 
    console.log('signUpValidation called');
    e.preventDefault();     
});

class Validator {
  constructor(emailField, passwordField, get_form) {

      this.emailField = emailField;
      this.passwordField = passwordField;
      this.emailError = emailField.nextElementSibling;
      this.passwordError = passwordField.nextElementSibling;
      this.get_form = get_form;
      this.check = true;

  }

  validateFields() {
      this.check = true;

      if (this.emailField.value === '' || !this.emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
          this.setError(this.emailError, 'Enter valid email.');
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
        //  alert("You have successfully signed up!");

        const get_local_data = JSON.parse(localStorage.getItem('userData'));
        
        if(get_local_data) {
          
          const input_email = this.emailField.value;
          const input_password = this.passwordField.value;
          const get_user = get_local_data.find(user=> input_email === user.user_email && input_password === user.user_password)

          if(get_user) {
            this.check = true;
          }else {
            this.setError(this.emailError, 'Enter valid email');
            this.setError(this.passwordError, 'invalid password');
            this.check = false;
         }
      
        } else {
            alert('you are not register signup first')
            this.check = false;        
        }

        if(this.check) {
         
          setTimeout(()=> {
            this.get_form.reset();
           },3000);
           
          let toastSuccess = document.getElementById('toast-success');
          toastSuccess.style.display = 'block';
          setTimeout(() => {
              toastSuccess.style.display = 'none';
          }, 4000);

          // const create_anchor = document.createElement('a')
          // create_anchor.setAttribute('href',"submit.html");
         
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