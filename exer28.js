var async = { 
    getAll: async function (urlArray,callback){
        let context = await 
        setContext(urlArray);
        for (let promise of context) {
            try {
                if (!(await promise).ok) {
                    let index = context.indexOf(promise);
                    throw new Error('Response to ajax call number ' +(index+1)+' is not ok. URL: "' + urlArray[index])
                }
                promise.then(function (response) {
                    return response.json();
                }).then(function (data) {
                    callback(data)
                })
            }
            catch (err) {
                window.alert(err)
            };
        }
    }
};

function setContext(urlArray) {
    let context = [];
    for (let url of urlArray) {
        context.push(fetch(url))
    }
    return context
}

//////////////////////////////////////////////////////
// Example: using the same localhost of exercise 18 //
//////////////////////////////////////////////////////

async.getAll(['http://localhost:3000/candidates/0','http://localhost:3000/candidates/2','http://localhost:3000/candidates/2'],function (response) {
    let div = document.createElement("div");
    div.innerHTML = response["firstname"];
    document.body.appendChild(div)
})
