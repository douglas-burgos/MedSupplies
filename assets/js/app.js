const hamburger = document.querySelector(".menu-hamburguesa");
const navbar = document.querySelector(".navbar-header");

hamburger.addEventListener("click", mobileMenu);

console.log(hamburger);
console.log(navbar);

function mobileMenu() {
    console.log('Diste click en el menu hamburguesa');
    if (navbar.classList.contains('hidden')) {
        navbar.classList.add("active");
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.remove("active");
        navbar.classList.add("hidden");
    }
    
    console.log(navbar); 
}
