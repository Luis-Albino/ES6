function Person (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName
};

// Subclassing //

function Medic (firstName,lastName,speciality) {
    Person.call(this,firstName,lastName);
    this.speciality = speciality;
};

Medic.prototype =  Object.create(Person.prototype);

// Instantiation //

let me = new Person("Luis","Albino");

let drStrange = new Medic("Stephen","Strange","Surgery");

// AJAX GET request //

function ajaxGet (person,callBack) {
    setTimeout(() => { callBack(person) }, 0);
};


ajaxGet(me,function(person){ console.log("Last person = ",Person.prototype.fullName.call(person)) })
console.log("First person = Dr.",drStrange.fullName());
