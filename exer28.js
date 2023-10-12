var async = {
    getAll: async function (urlArray,callBack) {
        let promiseArray = urlArray.map(url => fetch(url));

        let context = {};
        let j = 0;
        await promiseArray.reduce((chain,promise) => chain
            .then(function () {
                return promise
            })
            .then(response => response.json())
            .then(response => {
                context[j] = response;
                j++;
            })
        ,Promise.resolve());

        console.log(context)

        callBack(context)

    }
}

//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

let myUrlArray = ['http://localhost:3000/candidates/0','http://localhost:3000/candidates/1','http://localhost:3000/candidates/2','http://localhost:3000/candidates/3'];

function myCallBack (responseObj) {
    for (let key in responseObj) {
        let div = document.createElement("div");
        div.innerHTML = responseObj[key]["firstname"] ?? "Not found";
        document.body.appendChild(div)
    }
}

async.getAll(myUrlArray,myCallBack)
