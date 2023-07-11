
function disjunction (obj1,obj2) {
    let object = [obj1,obj2];
    const keysObj = [];
    for (let i=0; i<2; i++){
        keysObj[i] = Object.keys(object[i]);
        for (let j in keysObj[i]) {
            keysObj[i][j] += ": " + object[i][keysObj[i][j]]
        }
    }

    var compare = disjunction.prototype.compare;

    let conjunction = compare(keysObj[0],keysObj[1],"conjunction");
    let disjunction1 = compare(keysObj[0],conjunction,"disjunction");
    let disjunction2 = compare(keysObj[1],conjunction,"disjunction");
    
    return disjunction1.concat(disjunction2)
};

disjunction.prototype.compare = function (arr1,arr2,logicalOperation) {
    let arr = [];
    for (let key of arr1) {
        if ((logicalOperation === "conjunction" && arr2.includes(key)) || (logicalOperation === "disjunction" && !arr2.includes(key))) {
            arr.push(key)
        }
    };
    return arr
};

let obj1 = {
    a:"A",
    b:"B",
    c:"C"
};

let obj2 = {
    a:"A",
    c:"C",
    d:"D"
};

console.log(disjunction(obj1,obj2)); // Expected: ['b','d']
