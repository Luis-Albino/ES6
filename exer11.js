
function disjunction (obj1,obj2) {

    const keysObj1 = Object.keys(obj1);
    const keysObj2 = Object.keys(obj2);

    var compare = disjunction.prototype.compare;

    let conjunction = compare(keysObj1,keysObj2,"conjunction");
    let disjunction1 = compare(keysObj1,conjunction,"disjunction");
    let disjunction2 = compare(keysObj2,conjunction,"disjunction");
    
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