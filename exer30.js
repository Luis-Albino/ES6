let paragraph = document.getElementsByTagName("p");

for (let i = 0; i<8; i=i+2) {
    let hidden = true;
    paragraph[i].style.cursor =  "pointer";
    paragraph[i].addEventListener("click",function(){
        paragraph[i+1].style.visibility = hidden?"visible":"hidden";
        hidden = !hidden;
    });
    paragraph[i+1].style.visibility = "hidden";
}