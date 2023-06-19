/////////////////////////
// Athlete constructor //
/////////////////////////

function Athlete (firstName,lastName,height,weigth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height; // in meters
    this.weigth = weigth; // in lbs

    // medals //
    let medals = {
        gold: 0,
        silver: 0,
        bronze: 0
    };

    this.winMedal = function (type) {
        type = type.toLowerCase();
        if (medals.hasOwnProperty(type)) medals[type] += 1;
    };

    this.showMedals = function (type) {
        return medals
    }
};

Athlete.prototype.introduce = function () {
    console.log("This is",this.firstName,this.lastName)
};

Athlete.prototype.BMI = function () {
    // lbs to kg convertion //
    let kg = 0.45359*this.weigth;
    let height2 = (this.height)*(this.height);
    return kg/height2
};

/////////////////////////
// Swimmer constructor //
/////////////////////////

function Swimmer (firstName,lastName,height,weigth) {
    Athlete.apply(this,arguments);
    this.training = function () {
        /* start swimmer trainig */
    }
};

Object.setPrototypeOf(Swimmer.prototype,Athlete.prototype);

Swimmer.prototype.introduce = function () {
    console.log(this.firstName,this.lastName,"is a professional swimmer")
};


/////////////////////////
/// Swimmer instance ////
/////////////////////////

let competitor = new Swimmer("Ian","Thorpe",1.96,230);
competitor.introduce();
console.log(competitor.BMI())
competitor.winMedal("gold");
competitor.winMedal("gold");
competitor.winMedal("silver");
console.log(competitor.showMedals())