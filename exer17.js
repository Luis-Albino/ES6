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

let infoDiv = document.getElementsByClassName("info")[1].getElementsByTagName("div");
infoDiv[0].textContent = candidate.name.firstname;
infoDiv[1].textContent = candidate.printName();
