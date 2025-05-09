/**
     Name: ELYSE NIYONAGIRA
     file: script.js
     09/05/2025
     This page gives functionality to navigation in project.html.*/


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop back to the last slide
    }
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }

    // Update the carousel display
    document.querySelector(".carousel").style.transform = `translateX(-${currentSlide * 100}%)`;
}
