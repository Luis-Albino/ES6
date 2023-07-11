String.prototype.appendMonthAfter = function (referenceMonth) {
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthIndex = month.indexOf(referenceMonth);
    monthIndex = (monthIndex > 10)?0:monthIndex+1;
    let nextMonth = month[monthIndex];
    let str = "";
    let index = this.search(referenceMonth);
    if (index > -1) {
        let slice = this.slice(0,index);
        let rest = this.slice(index + referenceMonth.length);
        rest = rest.appendMonthAfter(referenceMonth)
        str = slice + referenceMonth + " " + nextMonth + rest
    }
    else {
        str = this.toString()
    }
    return str
};

console.log("January February March January February March".appendMonthAfter("March"))
