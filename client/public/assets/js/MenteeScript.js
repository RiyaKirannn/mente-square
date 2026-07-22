let resizeCheck = 0;

//HomePage TopWrap
function setNone() {
    if (window.innerWidth < 769) {
        document.querySelectorAll(".hd-md").forEach(x => {
            x.classList.add("d-none");
        })
    } else {
        document.querySelectorAll(".hd-md").forEach(x => {
            x.classList.remove("d-none");
        })
    }
}

window.addEventListener("resize", setNone);







