import "./navbar.module.js"
import "./typed.module.js"
import "./gallery.module.js"
import "./project.module.js"
import "./contactus.module.js"

const loading = document.querySelector(".loding-screen")
const goToTopButton = document.querySelector(".go-to-top")


// Js Typed  in Hero Section
const typed = new Typed('#element', {
    strings: ['MEP Installations', 'Swimming pools', 'Floor and wall tilling' ,  'Landscape Installation'],
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
                document.body.style.overflow = "auto"
            }, 0)
        }, 300)
    }, 1900)
})

// Go To Top

const scrollToTop = () => {
    if (window.scrollY > 50) {
        goToTopButton.classList.add("active");
    } else {
        goToTopButton.classList.remove("active");
    }
    goToTopButton.addEventListener("click", () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    })
}

window.addEventListener("scroll", scrollToTop)