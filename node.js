var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynavbar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = stickynavbar()