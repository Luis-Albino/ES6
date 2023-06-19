let candidates = [];
let url = 'http://localhost:3000/candidates/';

//////////////////
/// Table page ///
//////////////////

function tablePage () {
    clearWindow();

    let table = document.getElementById("table").content.cloneNode(true);
    addRow(table.children[0],"Name","Last Name","Phone",'<a class="add">#Add</a>')
    document.body.appendChild(table);
    
    let container = document.getElementById("container");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (arr) {
        for (let i in arr) {
            let obj = arr[i];
            candidates.push(obj);
            addRow(container,obj["firstname"],obj["lastname"],obj["phone"],'<div id="'+i+'"><a class="edit">edit</a>/<a class="delete">delete</a></div>'); 
        }
    })
    
    container.addEventListener("click",function (event) {
        let target = event.target;
        if (target.className === "add") {
            candidatePage()
        }
    
        if (target.className === "edit") {
            let id = target.parentNode.id;
            candidatePage(id)
        }
    
        if (target.className === "delete") {
            let id = target.parentNode.id;
            deleteCandidate(id)
        }
    })
}

tablePage()

//////////////////////
/// candidate page ///
/////////////////////

function candidatePage (candidateNumber) {
    clearWindow();

    let table = document.getElementById("candidate").content.cloneNode(true);
    document.body.appendChild(table);

    if (candidateNumber !== undefined) {
        let candidate = candidates[candidateNumber];
        document.getElementById("firstname").value = candidate["firstname"];
        document.getElementById("lastname").value = candidate["lastname"]
        document.getElementById("phone").value = candidate["phone"]
    }

    // save button //
    document.getElementById("save").addEventListener("click",function () {
        let data = {
            "firstname": document.getElementById("firstname").value,
            "lastname": document.getElementById("lastname").value,
            "phone": document.getElementById("phone").value
        };
        save(data,candidateNumber)
    })
}

/////////////////////
// functionalities //
/////////////////////

function addRow (table,...cell) {
    let rowTemplate = document.getElementById("rowTemplate").content.cloneNode(true);
    let columnElement = rowTemplate.children[0].children;
    for (let i in cell) {
        if (cell[i] !== null) columnElement[i].innerHTML = cell[i]
    };
    table.appendChild(rowTemplate)
}

function clearWindow () {
    while (document.body.children[3]) {
        document.body.children[3].remove();
    }
}

////////////////////
// Event handlers //
////////////////////

function save (data,candidateNumber = undefined) {

    if (candidateNumber !== undefined) {
        fetch(url+candidateNumber, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
    else {
        fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    };
    tablePage()
}

function deleteCandidate (candidateNumber) {
    fetch(url+candidateNumber, {
        method: "DELETE"
    });
    tablePage();
};