let paragraph = document.getElementsByTagName("p");

for (let i = 0; i<8; i=i+2) {

    let hidden = true;

    paragraph[i+1].setVisibility = function (visible) {
        hidden = visible === undefined?hidden:visible;
        this.style.visibility = hidden?"visible":"hidden";
        hidden = !hidden;
    };

    paragraph[i].style.cursor =  "pointer";
    paragraph[i].addEventListener("click",function(){
        paragraph[i+1].setVisibility();
        for (let j = 1; j<8; j=j+2) {
            if (j != i+1) paragraph[j].setVisibility(false);
        }
    });
    
    paragraph[i+1].style.visibility = "hidden";
}