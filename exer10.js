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

function ajaxGet (url,person) {
    let newURL = new URL(url);
    newURL.searchParams.set('firstName',person.firstName);
    newURL.searchParams.set('lastName',person.lastName);
    fetch(newURL)
};
