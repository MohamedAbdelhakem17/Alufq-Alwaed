// Get Element
const sections = document.querySelectorAll("section")
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
    if (sectionId) {
        const sectionOffsetTop = section.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop - 10,
            behavior: "smooth"
        });
    }
};


const updateActiveLinkOnScroll = () => {
    const scrollPosition = document.documentElement.scrollTop;
    const homeLink = document.getElementById("index");
    const aboutSectionOffset = document.getElementById("about").offsetTop - 100;
    sections.forEach(section => {
        const sectionHeight = section.offsetTop + section.offsetHeight;
        const inSection = scrollPosition >= section.offsetTop - section.offsetHeight * 0.18 && sectionHeight - section.offsetHeight * 0.18
        if (inSection) {
            const currentId = section.attributes.id.value;
            navbarLinks.forEach((el) => { el.classList.remove("active") });
            const selector = `.navbar .menu .nav-link[href="#${currentId}"]`;
            const element = document.querySelector(selector)
            element && element.classList.add("active");
        }
    });
    if (scrollPosition >= 0 && scrollPosition < aboutSectionOffset) {
        homeLink.classList.add("active");
    } else {
        homeLink.classList.remove("active");
    }

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

