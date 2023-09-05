var async = {
    getAll: function (urlArray,callBack) {
        let obj = {};
        for (let i in urlArray) {
            obj[i] = fetch(urlArray[i])
        }
        (async function () {
            for (let key in obj) {
                let responseValue = await obj[key];
                let myPromise = new Promise ((resolve,reject) => {
                    if (responseValue.ok) {
                        return resolve(responseValue)
                    }
                    else {
                        return reject(new Error("Not found"))
                    }
                });
                myPromise
                .then(response => response.json())
                .then(data => callBack(data))
                .catch(error => callBack(error))     
            } 
        })();
    }
}

//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

let myUrlArray = ['http://localhost:3000/candidates/0','http://localhost:3000/candidates/1','http://localhost:3000/candidates/2','http://localhost:3000/candidates/3'];

function myCallBack (data) {
    let div = document.createElement("div");
    div.innerHTML = data["firstname"] ?? data;
    document.body.appendChild(div)
}

async.getAll(myUrlArray,myCallBack)
