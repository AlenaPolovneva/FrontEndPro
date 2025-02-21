let num = prompt ('Enter a number');
if (num.length === 3 && !isNan(num)) {
    let a = num [0], b = num [1], c = num [2];
    let allSame = a === b && b === c;
    let anySame = a === b || b === c || a === c;
    alert(`All number are the same : ${allSame} \ Any same number : ${anySame}`);
} else {
    alert('Please enter a valid three-digit number');
}

