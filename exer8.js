function moveZeroes (arr) {
    let j = 0;
    let increment = 1;
    while (j < arr.length-1) {
        let i = arr.indexOf(0);
        j = i + increment;
        if (arr[j]) {
            console.log(i,j);
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
        else {
            increment += 1;
        };
    }
    return arr
}

let arr = [2,0,4,5,0,2,0,0,3];
console.log(moveZeroes(arr));
