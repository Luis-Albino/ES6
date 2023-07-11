function validate (str) {
    let forbidden = ["1234567890","qwertyuiop","asdfghjklñ","zxcvbnm"];
    for (let validationStr of forbidden) {
        let i = 0;
        let index = -1;
        for (let j=0; j<str.length; j++) {
            let previousIndex = index;
            index = validationStr.indexOf(str[j].toLowerCase());
            if (index > -1 && index === previousIndex + 1) {
                i++
            }
            else {
                i = 0
            };
            if (i === 4) {
                return false
            }
        }
    }
    return true
};

console.log(validate("1234"))
console.log(validate("qwert"))
console.log(validate("asdf"))
console.log(validate("Read a book every night"))
