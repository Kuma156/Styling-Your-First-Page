function upDate(previewPic) {

    console.log("Event triggered");

    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    console.log("Event triggered");

    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = "url('')";
}