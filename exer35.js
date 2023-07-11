let row = document.getElementsByTagName("table")[0].getElementsByTagName("tr");

let nodes = [];
for (let node of row) {
    nodes.push(node.cloneNode(true))
};

nodes.sort(function(row1,row2){
    let age1 = row1.getElementsByTagName("td")[1].innerText;
    let age2 = row2.getElementsByTagName("td")[1].innerText;
    return age2 - age1
})

for (let i=1; i<row.length; i++) {
    row[i].replaceWith(nodes[i]);
}
