function primeNumbers (max) {
    let prime = [1];
    for (let i=2; i<= max; i++) {
        let isPrime = true;
        for (let j=1; j<prime.length; j++) {
            if (!(i%prime[j])) {
                isPrime = false;
                break; 
            };
        }
        if (isPrime) prime.push(i)
    }
    return prime
}

function* randomLCG(min,max = 0) {
    if (min > max) [max,min] = [min,max];
    let modulus = max-min+1;
    let seed = Date.now() % modulus; 
    let a = 1;
    let c;

    let isRational = true;
    let prime = primeNumbers(modulus-1);
    while (isRational) {
        let length = prime.length;
        let index = Date.now() % length;
        if (index ===0 || modulus % prime[index]) {
            isRational = false;
            c = prime[index];
        }
    }

    nextNumber = seed;
    for(let i = 0; i < modulus; i++) {
        number = nextNumber;
        nextNumber = (number*a + c) % modulus;
        yield min + number
    }
}

let min = 2;
let max = 5;

// Function Call
let random = randomLCG(min,max);

// Print the generated random numbers
for(let i = 0; i < max-min+1; i++) {
    console.log(random.next().value);
}
