let arr1 = [2, 3, 5, 3];
let arr2 = [3, 4, 3, 5, 3, 6, 8];

// version 1 //
function intersection (arr1,arr2) {
    let intersectionArr = [];
    let intersectionIndices = {};
    for (let el of arr1) {
        intersectionIndices[el] = -1;
        if (arr2.includes(el)) intersectionIndices[el] = (intersectionIndices[el] != undefined)?arr2.indexOf(el,intersectionIndices[el]+1):arr2.indexOf(el);
        let index = intersectionIndices[el];
        if (index >= 0) {
            intersectionArr.push(el)
        }
    }
    return intersectionArr
}

console.log(intersection(arr1,arr2));
