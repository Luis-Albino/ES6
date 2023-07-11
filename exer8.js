// console.log(arr.sort((a, b) => b===0?-1:1))

Array.prototype.moveZeroes = function () {
    for (let i=0; i < this.length-1; i++) {
        let j = i+1;
        while (!this[i] && j < this.length) {
            if (this[j]) {
                [this[i],this[j]] = [this[j],this[i]]
            }
            else {
                j++
            }
        }
    }
    return this
}

let arr = [2,0,4,5,0,2,0,0,3];
arr.moveZeroes()
console.log(arr)
