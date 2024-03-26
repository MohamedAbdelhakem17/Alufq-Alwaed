import "./navbar.js"
import "./typed.module.js"
import "./gallery.js"
import "./project.js"

// Js Typed  in Hero Section
const typed = new Typed('#element', {
    strings: ['MEP Installations', 'Swimming pools', 'Floor  wall tilling'],
    typeSpeed: 90,
    loop: true,
});


window.addEventListener("load", () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})
AOS.init();