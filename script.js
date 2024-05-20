var firstIndex = 0;
function slideShow() {
    setTimeout(slideShow, 2500);
    var slides;
    const img = document.querySelectorAll("img");
    for(slides =0; slides < img.length; slides++) {
        img[slides].style.display = "none";
}
    firstIndex++;
    if(firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex-1].style.display = "block";
}
slideShow();



