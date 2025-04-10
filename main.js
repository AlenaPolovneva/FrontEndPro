class Calculator {
    add(a, b) {
        return a + b;
    }

    dif(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            return 'Error: division by zero';
        }
            return a / b;
    }
}
const calc = new Calculator();

console.log(calc.add(5, 3));
console.log(calc.dif(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));