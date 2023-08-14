function* randomLCG (min = 1,max) {   
    if (max === undefined) {
        [max,min] = [min,0]
    };

    if (min > max) return null;

    let modulus = max - min;
    let number;
    let nextNumber = Date.now() % modulus; // seed
    const A = 4;  // multiplier  A < modulus
    let C = 0;    // incrementer c < modulus
    while (C === 0) {
        C = Math.floor(modulus*Math.random())

    }

    for (let i=0; i<modulus; i++) {
        number = nextNumber;
        nextNumber = (A*number + C) % modulus;
        yield min + number
    }
}

let min = 0;
let max = 9;
let random = randomLCG(min,max);
for(let i=0; i<max-min; i++) {
    console.log(random.next().value)
}
