 function appendNextMonth (str) {
    let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December","January"];
    let monthArray = str.match(/\w+/g);
    let lastIndex = monthArray.lastIndexOf(monthArray[0])-1;
    let month = monthArray[lastIndex];
    let date = new Date(month + " 1,0");
    let newMonth = monthNames[date.getMonth()+1];

    let newStr = "";
    for (let i in monthArray) {
        newStr += monthArray[i] + " ";
        if (i == lastIndex) {
            newStr += newMonth + " ";
        }
    };
    newStr += newMonth;

    return newStr
}

let str = "January February March January February March";

console.log(appendNextMonth(str))
