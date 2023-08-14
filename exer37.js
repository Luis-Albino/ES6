///// String method /////

String.prototype.exclamation = function () {
    let obj = this.constructor.markedObject(this,"!");
    return this.constructor.addMark(obj);
};

// static methods
String.addMark = function (obj) {
    let {string, mark} = obj;
    return `${string}${mark}`
}

String.markedObject = function (string,mark) {
    return {
        string,
        mark
    }
}

console.log("hello".exclamation())
console.log("hello world".exclamation())


///// add /////

let add = (a = null,b = 0,...rest) =>  {
    let sum = (a === null)?a:(a+b)
    return sum + addArray(rest) 
};

function addArray ([a,b = 0,...rest]) {
    let sum = a??0;
    sum += b;
    for (let el of rest) {
        sum += el
    }
    return sum
}

console.log(add(2, 5));
console.log(add(7, 11));
console.log(add(12, 8, 5, 6));
