// Module Pattern //

var foo = (function () { 

    // private method //
    var privateMethod =  function () {
        console.log("private")
    }

    return {
        // public methods //
        bar () {
            console.log("public")
        },
        test: privateMethod
    }
})();
foo.bar();
foo.test();