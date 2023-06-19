Array.prototype.duplicate = function() {
    // return this.concat(this); // Using concatenation
    return [...this,...this]; // using spread opeator
  };

console.log([1,2,3,4].duplicate())