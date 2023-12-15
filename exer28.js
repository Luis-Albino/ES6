var async = {
    getAll: async function (urlArray,callBack) {
        let context = {};
        let i = 0;
        let promiseArray = urlArray.map(url => fetch(url));

        await promiseArray.reduce((chain,promise) => chain
            .then(function () {
                return promise
            })
            .then(response => { 
                i++;
                return response.json()
            })
            .then(response => { context[i] = response })
            .catch(error => { context[i]= { error } })
        ,Promise.resolve());

        callBack(context)
    }
}

// Callback Example //

function cb (context) {
    for (let i of Object.keys(context)) {
        if (context[i].error) {
            console.log(`Error: ${context[i].error}`)
        }
        else {
            console.log(`Response: ${context[i]}`)
        }
    }
}
