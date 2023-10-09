function parse (str,pattern) {
    let matchArray = (typeof pattern === "string")?new Array(...pattern):[null];
    pattern = "";
    let i = 0;
    let j = 0;
    let index = -1;
    for (let char of str) {
        if (char === matchArray[i]|| matchArray[i] === "*") {
            i++;
            pattern += char;
        }
        else if (char === matchArray[0] || matchArray[0] === "*") {
            i = 1;
            pattern = char;
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

console.log(parse("hello world","*"))
console.log(parse("hello world","l**"))
console.log(parse("hello world","lo"))
