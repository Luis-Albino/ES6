Array.prototype.max = function() {
    return Math.max(...this)
};

console.log([1,2,3,-1,-8].max())