var candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName: function () {
        return this.name.firstname + " " + this.name.lastname
    }
};

let infoDiv = document.querySelectorAll("#body .info div");
infoDiv[0].textContent = candidate.name.firstname;
infoDiv[1].textContent = candidate.printName();
