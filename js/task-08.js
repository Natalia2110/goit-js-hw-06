const loginForm = document.querySelector('.login-form')

// console.log(loginForm);

loginForm.addEventListener('submit', onLoginFormSubmit)

function onLoginFormSubmit(event) {
   event.preventDefault();

   const formElements = event.currentTarget.elements;

   const mail = formElements.email.value.trim();
   const password = formElements.password.value.trim();

   if(mail === "" || password === "") {
    return alert('Всі поля повинні бути заповнені!');
   } else {
    const formData = {
        mail,
        password
    }
    console.log(formData);
    loginForm.reset();

   }
}


