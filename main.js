const regForm = document.querySelector('#regForm');
function showFormError(selectorName,errorMessage){
    document.querySelector(`#error-${selectorName}`).textContent = errorMessage
}
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(regForm);
    const name = formData.get('name');
    const message = formData.get('message');
    const phone = formData.get('phone');
    const email = formData.get('email');
    let hasError = false;
    if (!name) {
        showFormError('name', 'Name required');
        hasError = true;
    } else {
        showFormError('name', '');
    }

    if (message.length < 5 ) {
        showFormError('message', 'The message must contain at least 5 characters');
        hasError = true;
    } else {
        showFormError('message', '');
    }
    const phonePattern = /^\+380\d{9}$/;
    if (!phonePattern.test(phone)) {
        showFormError('phone', 'The phone number must start with +380 and contain 8 digits after it');
        hasError = true;
    } else {
        showFormError('phone', '');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        showFormError('email', 'Incorrect email');
        hasError = true;
    } else {
        showFormError('email', '');
    }
    if(!hasError) {
        console.log ('Send data to the server!')
    }
    });

