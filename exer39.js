function validate (str) {
    let valid = !str.match(/\w{4}/g);
    return valid
};

console.log(validate("1234"))
console.log(validate("qwert"))
console.log(validate("asdf"))
console.log(validate("123 456 789"))