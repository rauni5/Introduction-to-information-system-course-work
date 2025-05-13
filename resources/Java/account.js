/*Change Login & Register Effects*/
function Login() {
    document.getElementById("Login").style.display = "block";
    document.getElementById("Register").style.display = "none";
    document.getElementById("logbtn").style.color="goldenrod";
    document.getElementById("registerbtn").style.color="black";

}
function Register() {
    document.getElementById("Register").style.display = "block";
    document.getElementById("Login").style.display = "none";
    document.getElementById("logbtn").style.color="black";
    document.getElementById("registerbtn").style.color="goldenrod";
}
/*Menu Effect*/
function openNav() {
    document.getElementById("menudrop").style.width = "300px";
}
function closeNav() {
    document.getElementById("menudrop").style.width = "0";
}
/*Cart Effect*/         
function closecart() {
    document.getElementById("cartdrop").style.width = "0";
} 
function opencart() {
    document.getElementById("cartdrop").style.width = "400px";
}
/*Form import data and alert back*/
function Loginfunction(event){
    event.preventDefault()
   var x = document.getElementById("password").value;
   var y = document.getElementById("username").value;
   alert("Login Details:\nYour username is :  "+y+ "\nLogin successful\n redirecting to home page");
   window.location.href = "../index.html";
}
function Registerfunction(event){
    event.preventDefault()
    var x = document.getElementById("password2").value;
    var y = document.getElementById("username2").value;
    var z = document.getElementById("Email").value;
    alert("Registration Details:\nYour username is :  "+y+"\nRegistration successful \n redirecting to home page ");
    window.location.href = "../index.html";
 }