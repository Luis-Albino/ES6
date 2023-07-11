Array.prototype.searchSet = function ()
{   
    let length = this.length;
    let array = []
 
    for (var i=0; i<length-1; i++)
    {
        let el1 = this[i];
        let hashSet = [];
        for (var j=i+1; j<length; j++)
        {
            let el2 = this[j];
            let hashElement = -(el1 + el2);
            if (hashSet.includes(hashElement))
            {
                array.push([hashElement,el1,el2])
            }
            else
                hashSet.push(el2);
        }
    }

    return array
}

const arr = [0, -1, 2, -3, 1];
console.log(arr.searchSet())
