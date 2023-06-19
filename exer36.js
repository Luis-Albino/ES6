function myPowerFn (base) {
    return function (exponent) {
        return Math.pow(base,exponent)
    }
};

var n = myPowerFn(3);
console.log(n(2)); // output: 9  (3^2)