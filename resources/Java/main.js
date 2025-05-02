function openNav(event) {
    document.getElementById("menudrop").style.width = "300px";
}


function closeNav(event) {
    document.getElementById("menudrop").style.width = "0";
}         

function closecart(event) {
    document.getElementById("cartdrop").style.width = "0";
} 
function opencart(event) {
    document.getElementById("cartdrop").style.width = "400px";
}
 
window.addEventListener("scroll", () => {
if (window.scrollY > 0) {
    const navbar = document.getElementById("navbar");
    navbar.classList.remove("transparent");
    navbar.classList.add('scrolled');
} else {
    const navbar = document.getElementById("navbar");
    navbar.classList.add("transparent");
    navbar.classList.remove('scrolled');
}
});