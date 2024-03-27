const imgs = [
"images/gallary/(32).jpg", "images/gallary/(17).jpg", "images/gallary/(20).jpg",
 "images/gallary/(19).jpg", "images/gallary/(35).jpg",
"images/gallary/(10).jpg", "images/gallary/(23).jpg", "images/gallary/(6).jpg", "images/gallary/(5).jpg",
"images/gallary/(30).jpg", "images/gallary/(7).jpg", "images/gallary/(15).jpg", "images/gallary/(14).jpg",
"images/gallary/(1).jpg", "images/gallary/(24).jpg",
"images/gallary/(12).jpg", "images/gallary/(3).jpg", "images/gallary/(18).jpg",
"images/gallary/(27).jpg", "images/gallary/(4).jpg", "images/gallary/(9).jpg", "images/gallary/(34).jpg",
"images/gallary/(26).jpg", "images/gallary/(8).jpg", "images/gallary/(31).jpg",
"images/gallary/(2).jpg", "images/gallary/(10).jpg"
];
const showMoreButton = document.getElementById("see-more");
const galleryContainer = document.getElementById("gallery-container");
const imgView = document.getElementById("view");
const activeImg = document.getElementById("activeImg");
const closeImgView = document.getElementById("close");
const nextImg = document.getElementById("next");
const prevImg = document.getElementById("prev");
let galleryImages = Array.from(document.querySelectorAll(".gallery-img"));

// Variables
let currentItemCount = 7;
let currentIndex = 0;

// Functions

function displayImages(startIndex, count) {
    let imgContent = '';
    for (let i = startIndex; i < startIndex + count && i < imgs.length; i++) {
        imgContent += `<div class="col-12 col-md-6 col-lg-3 p-1 rounded rounded-1 overflow-hidden" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="300" >
        <img src="${imgs[i]}" alt="Alufq Alwaed Project" class="w-100 gallery-img">
    </div>`;
    }
    galleryContainer.innerHTML += imgContent;
    callHandelEvent()
}


function showMore() {
    displayImages(currentItemCount, 5);
    currentItemCount += 5;
    if (currentItemCount >= imgs.length) {
        showMoreButton.classList.add("d-none");
    }
}

function showImage(index) {
    const src = galleryImages[index].src;
    activeImg.src = src;
    imgView.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeImageView() {
    imgView.classList.remove("active");
    document.body.style.overflow = "auto";
}

function navigateNext() {
    currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
}

function navigatePrev() {
    currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
    showImage(currentIndex);
}

function callHandelEvent() {
    galleryImages = Array.from(document.querySelectorAll(".gallery-img"));
    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
    });
}

// Event Listeners
showMoreButton.addEventListener("click", showMore);
closeImgView.addEventListener("click", closeImageView);
nextImg.addEventListener("click", navigateNext);
prevImg.addEventListener("click", navigatePrev);

// Initial Display
displayImages(0, currentItemCount);

