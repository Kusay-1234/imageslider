let slidesIndex = 0;

function showSlide(){
  let slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[slidesIndex].style.display = "block";
  }

  function nextSlide(){
    let slides = document.querySelectorAll(".slides img");
    slidesIndex++;
    if (slidesIndex >= slides.length){
      slidesIndex = 0;
    }

    showSlide();
  }

  function previousSlide(){
    let slides = document.querySelectorAll(".slides img");
    slidesIndex--;
    if (slidesIndex < 0){
      slidesIndex = slides.length - 1;
    }

    showSlide();
  }

  document.addEventListener("DOMContentLoaded", () => {
    showSlide();

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev")?.addEventListener("click", previousSlide);

  });
















































































// let slidesIndex = 0; // Start with the first image (index 0)
// let slides; // To store the images container

// // Function to show the current slide
// function showSlide() {
//   slides = document.querySelectorAll(".slides img"); // Get all the images
//   const totalSlides = slides.length;

//   // Hide all slides first
//   slides.forEach((slide) => {
//     slide.style.display = "none"; // Hide all images
//   });

//   // Show the current slide based on slidesIndex
//   slides[slidesIndex].style.display = "block"; // Display the current slide
// }

// // Function to move to the next slide
// function nextSlide() {
//   slidesIndex++; // Move to the next slide
//   if (slidesIndex >= slides.length) {
//     slidesIndex = 0; // If it exceeds the total number of slides, go back to the first slide
//   }
//   showSlide(); // Show the current slide after changing the index
// }

// // Initializing the slider when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   showSlide(); // Show the first image by default when the page loads

//   // Event listener for the "next" button
//   document.querySelector(".next").addEventListener("click", nextSlide);
// });






