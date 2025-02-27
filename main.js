let input = prompt ("Please enter an integer");
let N = Number (input);
if (isNaN(N)) {
    console.log ("Please enter a valid number");
} else {
if (N > 1) {
    let isPrime = true;
 for (let i = 2; i < N;i ++ ) {
     if (N % i === 0) {
         isPrime = false;
         break;
     }
 }
 if (isPrime) {
     console.log (N + "is a prime number.");
 } else {
     console.log (N + "is not a prime number.");
 }
 } else {
    console.log ("The number must be greater than 1.");
 }
}


