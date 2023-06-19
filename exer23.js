function randomInteger (min = 1,max) {
    
    if (max === undefined) {
        [max,min] = [min,0]
    };
    
    let random;
    if (max >= min) {
        let length = max-min+1;

        random = Math.floor(min + length*Math.random());

        let storage = randomInteger.prototype.storage;

        if (!storage[min]) {
            storage[min] = {
                [max] : []
            }
        }
        else if (!storage[min][max]) {
            storage[min][max] = []
        };
    
        if (storage[min][max].includes(random)) {
            if (storage[min][max].length != length) {
                random = randomInteger(min,max);
            }
            else {
                random = undefined
            }
        }
        else {
            storage[min][max].push(random);
        }
    };

    return random
};

randomInteger.prototype.storage = {};

for (let i = 0, min = 2, max = 5; i < max-min+1; i++) {
    console.log(randomInteger(min,max))
}