function getNumber () {
    let count = 0;
    while (count < 10) {
        let userInput = prompt("Enter a number greater than 100:");
        let number = Number (userInput);
        if (number > 100) {
            console.log ("Last number entered: " + number );
            break;
        } else {
            alert ("The number must be greater than 100. Try again.");
            count ++;
        }
    }
}
getNumber();