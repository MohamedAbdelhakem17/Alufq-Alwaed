import "./navbar.js"
import "./typed.module.js"
import "./gallery.js"
import "./project.js"
import "./contactus.js"

const loading = document.querySelector(".loding-screen")

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


// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        loading.children[0].style.opacity = 0
        setTimeout(() => {
            loading.style.opacity = 0
            setTimeout(() => {
                loading.remove()
                document.body.style.overflow="auto"
            }, 0)
        }, 300)
    }, 1900)
})

