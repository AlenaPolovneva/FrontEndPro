const btn1 = document.querySelector('#linkButton');
const btn2 = document.querySelector('#innerButton');
let savedLink = "";
btn1.addEventListener('click', function () {
    const input = prompt('Enter the link:');
    if (input) {
        savedLink = input;
    }
    });
btn2.addEventListener('click', function () {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
alert ('Link not established!')
    }
    });
console.log (btn1);
console.log (btn2);