function setTime (dateObj,hours = 0, minutes = 0, seconds = 0) {
    if(dateObj instanceof Date) {
        dateObj.setHours(hours);
        dateObj.setMinutes(minutes);
        dateObj.setSeconds(seconds);
        return dateObj
    }
};

let today = new Date();

setTime(today)
console.log(today.toString())