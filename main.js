const pyfContainer = document.querySelector("Container")
function creatPyfTable() {
    let table = document.createElement('table');

    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();

        for (let j = 1; j <= 10; j++) {
            let cell = row.insertCell();
            cell.textContent = i * j;
            cell.style.padding = '10px';
            cell.style.textAlign = 'center';
            cell.style.border = '1px solid black';
        }
    }
    document.body.appendChild(table);
}
creatPyfTable();
console.log(pyfContainer);
