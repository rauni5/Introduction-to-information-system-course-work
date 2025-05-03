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
function Loginfunction(){
   var x = document.getElementById("password").value;
   var y = document.getElementById("username").value;
   alert("Login Details:\nYour username is :  "+y+ "\nYour passowrd is :  "+x);
}
function Registerfunction(){
    var x = document.getElementById("password2").value;
    var y = document.getElementById("username2").value;
    var z = document.getElementById("Email").value;
    alert("Registration Details:\nYour username is :  "+y+"\nYour Email is:  "+z+ "\nYour passowrd is :  "+x);
 }