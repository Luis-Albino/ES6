var async = {
    getAll: async function (urlArray,callBack) {
        let promiseArray = urlArray.map(url => fetch(url));

        await promiseArray.reduce((chain,promise) => chain
            .then(function () {
                return promise
            })
            .then(response => response.json())
            .then(response => callBack(response))
            .catch(err => callBack(err))
        ,Promise.resolve());
    }
}


//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

let myUrlArray = ['http://localhost:3000/candidates/0','http://localhost:3000/candidates/1','http://localhost:3000/candidates/2','http://localhost:3000/candidates/3'];

function myCallBack (data) {
        let div = document.createElement("div");
        div.innerHTML = data["firstname"] ?? "Not found";
        document.body.appendChild(div)
}
