let arr1 = [2, 3, 5, 3];
let arr2 = [3, 4, 3, 5, 3, 6, 8];

function intersection (arr1,arr2) {
    let intersection = [];
    let obj = {};

    for (let el of arr1) {
        if (!obj[el]) obj[[el]] = 1
        else obj[[el]]++;
    }

    for (let el of arr2) {
        if (obj[el]) {
            intersection.push(el);
            obj[el] -= 1;
        }
    }

    return intersection
}

console.log(intersection(arr1,arr2));
