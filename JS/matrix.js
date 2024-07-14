// Get the canvas element
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Set the width and height of the canvas
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Create an array of characters
const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

// Create an array of columns
const columns = Math.floor(canvasWidth / 20);

// Initialize the y positions of the columns
const yPositions = [];

for (let i = 0; i < columns; i++) {
  yPositions[i] = Math.random() * canvasHeight;
}

// Update the matrix animation
function updateMatrix() {
  // Set the background color
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Set the text color and font
  ctx.fillStyle = "green";
  ctx.font = "12px timesnewroman";

  // Loop through each column
  for (let i = 0; i < columns; i++) {
    // Select a random character from the array
    const character = characters[Math.floor(Math.random() * characters.length)];

    // Set the y position of the current column
    const y = yPositions[i];

    // Draw the character at the current position
    ctx.fillText(character, i * 20, y);

    // Move the column down by 20 units
    yPositions[i] += 20;

    // Reset the position if it reaches the bottom of the canvas
    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;
    }
  }
}

// Render the matrix animation
function renderMatrix() {
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}

// Start the animation
renderMatrix();



let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
}

// Auto-slide every 10 seconds
setInterval(nextSlide, 10000);

// Update carousel on page load
updateCarousel();










function updateCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const inner = carousel.querySelector('.carousel-inner');
  const items = inner.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

  currentIndex = (currentIndex + 1) % totalItems;
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  inner.style.transform = newTransform;

  carousel.setAttribute('data-current-index', currentIndex);
}

function nextSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const inner = carousel.querySelector('.carousel-inner');
  const items = inner.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

  currentIndex = (currentIndex + 1) % totalItems;
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  inner.style.transform = newTransform;

  carousel.setAttribute('data-current-index', currentIndex);
}

function prevSlide(carouselId) {
  const carousel = document.getElementById(carouselId);
  const inner = carousel.querySelector('.carousel-inner');
  const items = inner.querySelectorAll('.carousel-item');
  const totalItems = items.length;
  let currentIndex = parseInt(carousel.getAttribute('data-current-index')) || 0;

  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  const newTransform = `translateX(-${currentIndex * 100}%)`;
  inner.style.transform = newTransform;

  carousel.setAttribute('data-current-index', currentIndex);
}

// Auto-slide every 10 seconds for each carousel
setInterval(() => updateCarousel('project-carousel'), 10000);
setInterval(() => updateCarousel('review-carousel'), 10000);

// Update carousels on page load
updateCarousel('project-carousel');
updateCarousel('review-carousel');




// Define an array of project images
const projectImages = [
  "project_img/1.png",
  "project_img/2.png",
  "project_img/3.png",
  // Add more image paths as needed
];

let currentImageIndex = 0;
const projectImageElement = document.getElementById("project-image");

// Function to change project image
function changeProjectImage() {
  projectImageElement.src = projectImages[currentImageIndex];
  currentImageIndex = (currentImageIndex + 1) % projectImages.length;
}

// Change project image every 5 seconds
setInterval(changeProjectImage, 5000);




