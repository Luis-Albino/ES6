let paragraph = document.getElementsByTagName("p");

for (let i = 0; i<8; i=i+2) {
    paragraph[i].style.cursor =  "pointer";
    paragraph[i].class =  "toggle";
    paragraph[i+1].style.visibility = "hidden"
}

document.body.addEventListener("click",function (e) {
    if (e.target.class === "toggle") {
        let nextNode = e.target.nextElementSibling;
        let nodeVisibility = nextNode.style.visibility;
        if (nodeVisibility === "visible") {
            nextNode.style.visibility = "hidden"
        }
        else {
            for (let i = 0; i<8; i=i+2) {
                paragraph[i+1].style.visibility = "hidden"
            }
            nextNode.style.visibility = "visible";
        }
    };   
})
