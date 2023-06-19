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

 let info = document.getElementsByClassName("info");
 info[0].innerHTML = candidate.name.firstname;
 info[1].innerHTML = candidate.printName();
 