function* randomIntegerGen (min = 1,max) {
    let orderedArr = [];
    let randomArr = [];

    for (let i=min; i<=max; i++) {
        orderedArr.push(i)
    };

    while (orderedArr.length) {            
        let length = orderedArr.length;
        let index = Math.floor(length*Math.random());
        randomArr.push(orderedArr[index]);
        orderedArr.splice(index,1)
    }

    for (let el of randomArr) {
        yield el
    }
};


function randomInteger (min = 1,max) {
    
    if (max === undefined) {
        [max,min] = [min,0]
    };
    
    let random;

    if (max >= min) {
        let length = max-min+1;

        let storage = randomInteger.prototype.storage;

        if (!storage[min]) {
            storage[min] = {
                [max] : undefined
            }
        }
        else if (!storage[min][max]) {
            storage[min][max] = undefined
        };
    
        if (storage[min][max]) {
            random = storage[min][max].next().value;
        }
        else {
            random = randomIntegerGen(min,max);
            storage[min][max] = random;
            random = random.next().value;
        }
    };

    return random
};

randomInteger.prototype.storage = {};

for (let i = 0, min = 2, max = 5; i < max-min+1; i++) {
    console.log(randomInteger(min,max))
}
