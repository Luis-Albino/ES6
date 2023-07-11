///// String method /////

String.prototype.exclamation = function () {
    return this.constructor.addExclamation(this);
};

// static method
String.addExclamation = function (str) {
    return str + "!"
}

console.log("hello".exclamation())
console.log("hello world".exclamation())


///// add /////

let add = (...args) =>  {
    let sum = 0;
    for (let el of args) {
        sum += el;
    }
    return sum
};

console.log(add(2, 5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));
