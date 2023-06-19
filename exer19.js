String.prototype.parse = function (str) {
    let matchArray = (typeof str === "string")?new Array(...str):[null];
    let iterator = String.prototype.iterator;
    let i = 0;
    let j = 0;
    let index = -1;
    for (let char of iterator(...this)) {
        if (char === matchArray[i]) {
            i++;
        }
        else {
            i = 0;
        };

        j++;
        if (i === matchArray.length) {
            index = j - i
        };
    };

    return (index != -1)?[str,"index: "+index,this]:null
};
String.prototype.iterator = function* () {
    for (let el of arguments) {
        yield el;
    }
};

console.log("hello world".parse("or"))