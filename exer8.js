function moveZeroes (arr) {
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        sortValue = arr[j];
        if (arr[i] === 0) {
            if (sortValue != 0) {
                arr[i] = sortValue;
                arr[j] = 0;
                i++;
                j++;
            }
            else j++;
        }
        else {
            i++;
            j++;
        }
    }
    return arr
}

let arr = [2,0,4,5,0,2,0,0,3];
console.log(moveZeroes(arr));
