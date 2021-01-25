adminNome = "admin";
senha = "123";

function verificarAdmin() {
    let n = document.getElementById("user").value;
    let s = document.getElementById("pass").value;
    if (n == adminNome && s == senha) {
        document.getElementById("painelAdmin").style.display = "block"   
        document.getElementById("adminLogin").style.display = "none"   
    } 
    else{
        alert("Login incorrecto");
    }
}