var async = { 
    getAll: function (urlArray,callBack) {
        let requestArray = [];
    
        for (let url of urlArray) {
            requestArray.push(fetch(url))
        }
    
        Promise.all(requestArray).then((responseArray) => {
            return Promise.all(responseArray.map(promise => promise.json()))
        }).then((dataArr) => { 
            callBack(dataArr)
        });
    }
};

//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

let myUrlArray = ['http://localhost:3000/candidates/0','http://localhost:3000/candidates/1','http://localhost:3000/candidates/2','http://localhost:3000/candidates/3'];

function myCallBack (dataArr) {
    for (let data of dataArr) {
        let div = document.createElement("div");
        div.innerHTML = data["firstname"];
        document.body.appendChild(div)
    }
}

async.getAll(myUrlArray,myCallBack)
