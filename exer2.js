String.prototype.reverse = function () {
    let str = "";
    for (let i=this.length-1; i>=0; i--) {
        str += this[i]
    }
    return str;
};

String.prototype.reverseWords = function () {
    let str = this.slice(0,this.length);
    let arr = this.match(/[^\s]+/gi);
    for (let word of arr) {
        str = str.replace(word,word.reverse())
    };
    return str
};

console.log("hello world".reverse())
console.log("hello world".reverseWords());
