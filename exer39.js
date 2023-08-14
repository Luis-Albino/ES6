function validate (str) {
    let forbidden = ["1234567890","qwertyuiop","asdfghjklñ","zxcvbnm"];
    for (let validationStr of forbidden) {
        for (let j=0; j<str.length-3; j++) {
            let slice = (str[j]+str[j+1]+str[j+2]+str[j+3]).toLowerCase();
            let reverse = (str[j+3]+str[j+2]+str[j+1]+str[j]).toLowerCase();
            if (validationStr.search(slice) != -1 || validationStr.search(reverse) != -1) return false
        }
    }
    return true
};

console.log(validate("1234"))
console.log(validate("qwert"))
console.log(validate("asdf"))
console.log(validate("Read a book every night"))
console.log(validate("fdsa"))
console.log(validate("fdsasdf"))
