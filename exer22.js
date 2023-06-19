function randomRGB () {
    let rndm = randomRGB.prototype.random;
    return "rgb("+rndm()+","+rndm()+","+rndm()+")"
};

randomRGB.prototype.random = function () {
    return Math.floor(256*Math.random())
};

let boxSyle = document.getElementById("box").style;

function divRGB () {
    boxSyle.backgroundColor = randomRGB();
};
