// ✅ Open & Close Sidebar Navigation
function openNav() {
    document.getElementById("sideNav").classList.add("show");
}

function closeNav() {
    document.getElementById("sideNav").classList.remove("show");
}

// ✅ Show & Close Watch Details
function showDetails(name, price, imageSrc) {
    document.getElementById("watch-name").innerText = name;
    document.getElementById("watch-price").innerText = "Price: " + price;
    document.getElementById("watch-image").src = imageSrc;
    document.getElementById("watch-details").style.display = "block";
}

function closeDetails() {
    document.getElementById("watch-details").style.display = "none";
}

// ✅ Automatic Slideshow for Multiple Banners
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

    setInterval(changeSlide, 3000); // Change slide every 3 seconds
}

// ✅ Start slideshows for both banners
document.addEventListener("DOMContentLoaded", function () {
    startSlideshow("imageBanner");
    startSlideshow("videoBanner");
});
