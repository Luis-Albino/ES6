String.prototype.appendAfter = function (apendedStr,referenceStr) {
    let str = "";
    let index = this.search(referenceStr);
    if (index > -1) {
        let slice = this.slice(0,index);
        let rest = this.slice(index + referenceStr.length);
        rest = rest.appendAfter(apendedStr,referenceStr)
        str = slice + referenceStr + apendedStr + rest
    }
    else {
        str = this.toString()
    }
    return str
};

console.log("January February March January February March".appendAfter(" April","March"))