/////////////////////////
// Athlete constructor //
/////////////////////////

class Athlete {
    constructor (firstName,lastName,height,weigth) {
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
    }

    introduce () {
        console.log("This is",this.firstName,this.lastName)
    }

    BMI () {
        // lbs to kg convertion //
        let kg = 0.45359*this.weigth;
        let height2 = (this.height)*(this.height);
        return kg/height2
    }
}

/////////////////////////
// Swimmer constructor //
/////////////////////////

class Swimmer extends Athlete {
    constructor (firstName,lastName,height,weigth) {
        super(firstName,lastName,height,weigth)
        this.training = function () {
            /* start swimmer trainig */
        }
    }

    introduce () {
        console.log(this.firstName,this.lastName,"is a professional swimmer")
    }
}

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
