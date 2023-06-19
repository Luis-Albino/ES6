Date.prototype.getNextDay = function () {
    let nextDay = new Date(this);
    nextDay.setDate(this.getDate() + 1)
    return nextDay
};

let date = new Date();
console.log(date.getNextDay())