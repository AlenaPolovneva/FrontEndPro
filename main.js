const participantsList = document.querySelector('#participants-list');
const addNewInput = document.querySelector('#idea-part');
const addNewBtn = document.querySelector('#add-new');
participantsList.addEventListener('click', (e) =>{
if(e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
}
    e.stopPropagation();
})
addNewBtn.addEventListener('click', () => {
    const name = addNewInput.value.trim();

    if(name.trim()) {
        const li = document.createElement( 'li');
        li.innerHTML = `${name} <button class='delete-btn'> Remove </button>`;
        participantsList.appendChild(li);
    }
    addNewInput.value = '';
})
