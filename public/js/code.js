
var userOnline;
var contas = [];

function user(name, pass){
    this.name = name;
    this.pass = pass;
    this.favourites = [];
}

var u = new user("admin", "123");
contas.push(u);


function addFavourites(elem){
    if(userOnline == null){
        alert("Error adding favourite: User is not online");
        return;
    }
    let movie = $(elem).parent().find("h5").text();
    
    if(elem.classList.contains("active")){
        let index = userOnline.favourites.indexOf(movie);
        if (index > -1){
            userOnline.favourites.splice(index, 1);
        }
        $(elem).toggleClass("active")
        return;
    }
    
    let repeated;
    userOnline.favourites.forEach(function(fav){
        if(movie == fav){
            repeated = true;
        }        
    });

    if(repeated == true){
        $(elem).toggleClass("active")
        return;
    }

    $(elem).toggleClass("active")    
    userOnline.favourites.push(movie);
    
}

function verificarUser() {
    let n = document.getElementById("userField").value;
    let s = document.getElementById("passwordField").value;

    contas.forEach(function(user) {
        if (n == user.name && s == user.pass){
             uLogin = user;
        }
   });

   if (uLogin == null) {
        alert("Login incorrecto");
        return;
    }

}

function mostrarCartaz()
{
    document.getElementById("welcome").style.display = "none"
    document.getElementById("carouselSite").style.display = "none"
    document.getElementById("scrollspy").style.display = "none"
    document.getElementById("cartaz").style.display = "block"
    document.getElementById("menuFavoritos").style.display = "none"
    document.getElementById("bCartaz").classList.add("active")
    document.getElementById("bFavoritos").classList.remove("active")

}

function mostrarWelcome(){
    document.getElementById("welcome").style.display = "block"
    document.getElementById("carouselSite").style.display = "block"
    document.getElementById("scrollspy").style.display = "block"
    document.getElementById("cartaz").style.display = "none"
    document.getElementById("menuFavoritos").style.display = "none"
    document.getElementById("bCartaz").classList.remove("active")
    document.getElementById("bFavoritos").classList.remove("active")

}

function mostrarFavoritos(){
    document.getElementById("welcome").style.display = "none"
    document.getElementById("carouselSite").style.display = "none"
    document.getElementById("scrollspy").style.display = "none"
    document.getElementById("cartaz").style.display = "none"
    document.getElementById("menuFavoritos").style.display = "block"
    document.getElementById("bFavoritos").classList.add("active")
    document.getElementById("bCartaz").classList.remove("active")
    document.getElementById("welcomeUser").innerHTML = "Welcome " + userOnline.name + "!";
    document.getElementById("favMovies").innerHTML = userOnline.favourites.join('<br>');

}

function login() {
    let uNome = document.getElementById("uNomeLogin").value;
    let uPass = document.getElementById("uPassLogin").value;

    contas.forEach(function(user) {
         if (uNome == user.name && uPass == user.pass){
              userOnline = user;
         }
    });

    if (userOnline == null) {
         alert("erro");
         return
    }

    if(userOnline.name == 'admin'){
        document.getElementById("nBackOffice").style.display = "block"
    }
    document.getElementById("nFavoritos").style.display = "block"
    document.getElementById("loginButton").style.display = "none"
    document.getElementById("signupButton").style.display = "none"
    document.getElementById("logoffButton").style.display = "block"
}

function logoff() {
    document.getElementById("nBackOffice").style.display = "none"
    document.getElementById("nFavoritos").style.display = "none"
    document.getElementById("loginButton").style.display = "block"
    document.getElementById("signupButton").style.display = "block"
    document.getElementById("logoffButton").style.display = "none"

}

function signup(){
    let username = document.getElementById("signUpUser").value.trim()
    let password = document.getElementById("signUpPass").value.trim()
    let tos = document.getElementById("signUpTOS").checked


    if(username == "" || password == "" || tos == false){
        alert("Need to fill all information and accept the terms of service");
        return;
    }

    for (i = 0; i < contas.length; i++){
         if (contas[i].name == username) {
            alert("User already exists");
            return;
         }
    }

    let u = new user(username, password);
    contas.push(u);
    userOnline = u;
    if(userOnline.name == 'admin'){
        document.getElementById("nBackOffice").style.display = "block"
    }   
    document.getElementById("nFavoritos").style.display = "block"
    document.getElementById("loginButton").style.display = "none"
    document.getElementById("logoffButton").style.display = "block"
    document.getElementById("signupButton").style.display = "none"
}
