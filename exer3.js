let arr1 = [2, 3, 5, 3];
let arr2 = [3, 4, 3, 5, 3, 6, 8];

// version 1 //
function intersection (arr1,arr2) {
    let interArr = [];
    for (let el of arr1) {
        if (arr2.includes(el)) {
            interArr.push(el)
        }
    }
    return interArr
}

console.log(intersection(arr1,arr2));


// version 2 //
console.log(arr1.filter(el => arr2.includes(el)));