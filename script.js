window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("first1");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}