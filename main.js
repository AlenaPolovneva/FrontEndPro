const buttonContainer = document.querySelector('#buttonContainer');
buttonContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert('You pressed ' + e.target.textContent);
    }
});
