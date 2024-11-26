const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickynavbar() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = stickynavbar()