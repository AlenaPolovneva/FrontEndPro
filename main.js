function averageOfNumbers (arr) {
    let sum = 0;
    let count = 0;
    for (let i =0; i < arr. length; i++){
    if(typeof arr[i] === "number"){
        sum += arr[i];
        count ++ ;
       }
    }
    return count > 0 ? sum / count : 0;
}
console.log(averageOfNumbers([10, "hello", 20, true, 30, null]));