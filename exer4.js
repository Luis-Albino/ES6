function flatten (arr) {
    let newArr = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            el = flatten(el)
            newArr.push(...el)
            
        }
        else {
            newArr.push(el)
        }
    }
    return newArr
}

let myArr = flatten([1,2,3,[4,5,[6,7]],8,9]);
console.log(myArr);