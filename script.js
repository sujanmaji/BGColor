document.body.style.textAlign = "center";

class ColorGenerator {
    ColorGenerator() {
    }
    RGBColor() {
        this.r = randBetween(0, 16) * 16;
        this.g = randBetween(0, 16) * 16;
        this.b = randBetween(0, 16) * 16;
        return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }
    rgbCode() {
        return [this.r, this.g, this.b];
    }
}

function randBetween(min, max) {
    return Math.floor((max - min) * Math.random() + min);
}

let c = new ColorGenerator();
function myFun() {
    let mainDiv = document.body;
    let randColor = c.RGBColor();
    console.log(randColor);
    mainDiv.style.background = randColor;
}

window.onload = myFun();

document.addEventListener("click", function () {
    myFun();
    let ptn = c.rgbCode();
    console.log(ptn);
    navigator.vibrate(ptn);
    //Deleting msg div
    let del = document.getElementById("msgDiv");
    if (del) {
        del.remove();
    }
});
