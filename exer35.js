var interchange = true;
while (interchange) {
    let row = document.getElementsByTagName("table")[0].getElementsByTagName("tr");
    for (let i= 1; i<row.length-1; i++) {
        let age1 = row[i].getElementsByTagName("td")[1].innerText;
        let age2 = row[i+1].getElementsByTagName("td")[1].innerText;
        if (age1 < age2) {
            row[i].parentNode.insertBefore(row[i+1],row[i]);
            break;
        }
        if (i === row.length-2) interchange = false;
    }
}