String.prototype.reverse = function () {
    let str = "";
    for (let i=this.length-1; i>=0; i--) {
        str += this[i]
    }
    return str;
};

String.prototype.reverseWords = function () {
    let str = "";
    let arr = this.match(/[^\s]+/gi);
    let j = arr.length - 1;
    for (let i in arr) {
        str += arr[i].reverse() + (i!=j?" ":"");
    };
    return str;
};

console.log("hello world".reverse())
console.log("hello world".reverseWords())