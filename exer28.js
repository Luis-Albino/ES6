/*
    urlArray =[
        {   // axCall1 //
            url: 'http://server',
            method: 'POST',
            info: [object],
            id: '1' // For DELETE and PUT methos
        },
        {
            // axCall2 //
        }
    ]
*/

var async = { 
    getAll: function (urlArray,callback){
        let context = []; // callback context
        for (let axCall of urlArray) {
            let url = axCall.url;
            if (axCall.id) url += axCall.id;
            let init = {
                method: axCall.method
            };
            if (axCall.method !== "GET" || axCall.method !== "DELETE") {
                init["headers"] = {
                    "Content-Type": "application/json"
                }
                init["body"] = JSON.stringify(axCall.data)
            }
            let promise = fetch(url,init)
            promise.then(function (response) {
                return response.json(); // Convert the AJAX response to an array/object data
            }).then(function (data) {
                context.push(data) // Execute the callback function
            })
        };
        let loop = setInterval(function(){
            if (context.length === urlArray.length) {
                for (let data of context) {
                    callback(data)
                }
                clearInterval(loop);
            }
        },0)
    }
};

//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

async.getAll([
    {
        url: 'http://localhost:3000/candidates/0',
        method: 'GET'
    },
    {
        url: 'http://localhost:3000/candidates/1',
        method: 'GET'
    },
    {
        url: 'http://localhost:3000/candidates/2',
        method: 'GET'
    }
],function (data) {
    let div = document.createElement("div");
    div.innerHTML = data["firstname"];
    document.body.appendChild(div)
})
