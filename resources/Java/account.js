function Login(event) {
    document.getElementById("Login").style.display = "block";
    document.getElementById("Register").style.display = "none";
    document.getElementById("logbtn").style.color="goldenrod";
    document.getElementById("registerbtn").style.color="black";

}
function Register(event) {
    document.getElementById("Register").style.display = "block";
    document.getElementById("Login").style.display = "none";
    document.getElementById("logbtn").style.color="black";
    document.getElementById("registerbtn").style.color="goldenrod";
}
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