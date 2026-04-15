function upDate(previewPic) {

    console.log("Event triggered");

    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    let imageDiv = document.getElementById("image");

    if(!imageDiv) {
        console.error("Element with id 'image' not found.");
        return;
    }

    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    console.log("Event triggered");

    let imageDiv = document.getElementById("image");

    if(!imageDiv) {
        console.error("Element with id 'image' not found.");
        return;
    }

    imageDiv.innerHTML = "Hover over an image below to display here.";
    imageDiv.style.backgroundImage = "url('')";
}

function initGallery() {
    console.log("Page loaded");

    let images = document.querySelectorAll(".hover-img");
    for(let i = 0; i< images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}

let items = document.querySelectorAll(".gallery-item");

items.forEach(function(item) {
    let timer;

    function startEffect() {
        console.log("Hover start");

        timer = setTimeout(function() {
            item.classList.add("zoom");
            item.classList.add("show-caption");
        }, 5000); // 5 seconds
    }

    function stopEffect() {
        console.log("Hover cancelled");
        clearTimeout(timer);
        item.classList.remove("zoom");
        item.classList.remove("show-caption");
    }

    item.addEventListener("mouseover", startEffect);
    item.addEventListener("mouseleave", stopEffect);
    item.addEventListener("focusin", startEffect);
    item.addEventListener("focusout", stopEffect);
});