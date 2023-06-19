function removeElement (array,element) {
    let index = array.indexOf(element);
    if (index != -1) array.splice(index,1);
    return array
};

console.log(removeElement(["a","b","c","d"],"a"))