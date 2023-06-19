Array.prototype.searchSet = function () {
    let length = this.length;
    let array = [];
    for (let i=0; i<length-2; i++) {
        for (let j=i+1; j<length-1; j++) {
            for (let k=j+1; k<length; k++) {
                let sum = this[i]+this[j]+this[k];
                if (sum === 0) array.push([this[i],this[j],this[k]]);
            }
        }
    }
    return array
};

console.log([3,2,1,0,-3,2,2,-2].searchSet())