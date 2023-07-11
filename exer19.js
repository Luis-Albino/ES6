function parse (str,pattern) {
    let matchArray = (typeof pattern === "string")?new Array(...pattern):[null];
    pattern = "";
    let iterator = String.prototype.iterator;
    let i = 0;
    let j = 0;
    let index = -1;
    for (let char of iterator(...str)) {
        if (char === matchArray[i] || matchArray[i] === "*") {
            i++;
            pattern += char;
        }
        else {
            i = 0;
            pattern = "";
        };

        j++;
        if (i === matchArray.length) {
            index = j - i;
            break // to ensure a lazy search
        };
    };

    return (index != -1)?[pattern,"index: "+index,str]:null
};
String.prototype.iterator = function* () {
    for (let el of arguments) {
        yield el;
    }
};

console.log(parse("hello world","*"))
console.log(parse("hello world","l**"))
