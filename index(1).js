
function openNav() {
    document.getElementById("sideNav").classList.add("show");
}

function closeNav() {
    document.getElementById("sideNav").classList.remove("show");
}


function showDetails(name, price, imageSrc) {
    document.getElementById("watch-name").innerText = name;
    document.getElementById("watch-price").innerText = "Price: " + price;
    document.getElementById("watch-image").src = imageSrc;
    document.getElementById("watch-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("watch-details").style.display = "none";
}


function startSlideshow(bannerId) {
    let slides = document.querySelectorAll(`#${bannerId} .slide`);
    let currentSlide = 0;
    let totalSlides = slides.length;

    function changeSlide() {
        slides.forEach((slide, index) => {
            slide.style.opacity = "0"; // Hide all slides
            if (index === currentSlide) {
                slide.style.opacity = "1"; // Show current slide
            }
        });

        currentSlide = (currentSlide + 1) % totalSlides;
    }

    setInterval(changeSlide, 3000); 
}


document.addEventListener("DOMContentLoaded", function () {
    startSlideshow("imageBanner");
    startSlideshow("videoBanner");
});
