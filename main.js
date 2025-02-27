let N = prompt (" Guess the number - ");
N = Number (N);
if(isNaN(N)) {
    console.log ("Please enter a valid number.");
} else {
    for (let i = 1; i <= 100; i ++) {
        if (i * i > N) {
            break ;
        }
        console.log (i);
    }
}

