 
const userSesion = document.getElementById("box-perfil");
const products = document.querySelectorAll(".box-result");
const wind = document.getElementById("window");
const times = document.querySelector(".fa-times");
const menu = document.getElementById("navigation");
const times2 = document.getElementById("times2");


let user = 1;
 document.getElementById("user").addEventListener("click", () => {
    
    if(user == 1){
        userSesion.classList.add("active");
        user = 0;
    }else {
        userSesion.classList.remove("active");
        user = 1;
    }
 });


let ventana = 1
products.forEach(el => {
    el.addEventListener("click", () => {
        if(ventana == 1){
            wind.classList.add("active");
            ventana = 0;
        }else {
            wind.classList.remove("active");
            ventana = 1;
        }
    });
});

times.addEventListener("click", () => {
    wind.classList.remove("active");
    ventana = 1;
});


let sidebar = 1;
document.getElementById("fa-bars").addEventListener("click", () => {
    if(sidebar == 1){
        menu.classList.add("active");
        sidebar = 0;
    }else{
        menu.classList.remove("active");
        sidebar = 1;
    }
});

times2.addEventListener("click", () => {
    menu.classList.remove("active");
    sidebar = 1;
});