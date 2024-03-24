// Get Element
const navbar = document.getElementById("navbar")
const modelBody = document.querySelector(" .navbar .model-body ")
const navbarMenu = document.querySelector("#navbar .menu")
const opoeNavbarButton = document.querySelector("#navbar .open")
const closeNavbarButton = document.querySelector(".close i")
const navbarLinks = Array.from(document.querySelectorAll(".navbar .menu .nav-link"))
const homeLink = document.getElementById("index");


const openNavbar = () => {
    navbarMenu.classList.add("show")
    modelBody.classList.add("fixed")
}

const closeNavbar = () => {
    navbarMenu.classList.remove("show")
    modelBody.classList.remove("fixed")
}

const changeActiveLink = (clickedElement) => {
    navbarLinks.forEach(element => {
        element.classList.remove("active");
    });
    clickedElement.classList.add("active");
};

const changeNavbarBackground = () => {
    const offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    if (offsetTop > 150) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active")
    }
};


const niceScroll = (element) => {
    const sectionId = element.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);
    if (sectionId !== "/") {
        const sectionOffsetTop = section.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop - 30,
            behavior: "smooth"
        });
    }
};

const updateActiveLinkOnScroll = () => {
    const scrollPosition = window.scrollY;
    const homeLink = document.getElementById("index");
    const aboutSectionOffset = document.getElementById("about").offsetTop - 30;
    
    if (scrollPosition >= 0 && scrollPosition < aboutSectionOffset) {
        homeLink.classList.add("active");
    } else {
        homeLink.classList.remove("active");
    }

    navbarLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const isInSection = scrollPosition >= sectionTop - 10 && scrollPosition < sectionTop + sectionHeight - 10;
            link.classList.toggle('active', isInSection);
        }
    });
};



opoeNavbarButton.addEventListener("click", openNavbar)
closeNavbarButton.addEventListener("click", closeNavbar)

navbarLinks.forEach(element => {
    element.addEventListener("click", closeNavbar);
    element.addEventListener("click", () => changeActiveLink(element));
    element.addEventListener("click", () => niceScroll(element))
});

homeLink.addEventListener('click', (event) => {
    location.hash = ""
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", changeNavbarBackground);
document.addEventListener("scroll", changeNavbarBackground);

document.addEventListener('scroll', updateActiveLinkOnScroll);
window.addEventListener('scroll', updateActiveLinkOnScroll);
