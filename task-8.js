
const form = document.querySelector('.login-form');
// const onFormsInput = form.querySelectorAll( 'input');

// console.log(form)
form.addEventListener('submit', onFormsSubmit);


function onFormsSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
       alert("Заповніть порожні поля");
        
        }

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(value)
        console.log(name)

        form.reset();
    })
    
       
       
       
}


    

    

















// const formElements = event.currentTarget.elements;

    // const mail = formElements.email.value;
    // const password = formElements.password.value;

    
    

    // console.dir(event.currentTarget)
    // console.dir(event.currentTarget)
// }



