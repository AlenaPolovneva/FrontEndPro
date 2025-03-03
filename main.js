function func(str, charsToRemove) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let shouldRemove  = false;
        for (let j = 0; j < charsToRemove.length; j++) {
            if (str[i] === charsToRemove[j]) {
                shouldRemove = true;
                break;
        }
    }
        if (!shouldRemove) {
            result += str[i];
        }
    }
    return result;
}
console.log(func(" hello world", ['l', 'd']));

