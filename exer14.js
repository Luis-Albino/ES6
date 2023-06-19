function isTwoPassed (...arg) {
    return arg.includes(2)
};

function fn () {
    console.log(isTwoPassed(...arguments));
    /* Any functionality */
};

fn(1,2,3,4)