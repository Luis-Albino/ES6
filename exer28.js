var async = { 
    getAll: function (urlArray,callBack) {    
        Promise.all(urlArray.map(url => fetch(url)))
        .then((responseArray) => {
            return Promise.all(responseArray.map(promise => promise.json()))
        })
        .then((dataArr) => { 
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
        if (data["id"] != undefined) {
            let div = document.createElement("div");
            div.innerHTML = data["firstname"];
            document.body.appendChild(div)
        }
    }
}

async.getAll(myUrlArray,myCallBack)
