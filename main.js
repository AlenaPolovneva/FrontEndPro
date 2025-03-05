function creatSum () {
    let total = 0;
    return function (num) {
        total += num;
        return total;
    }
}
console.log (creatSum );
