  // Initialize Typed.js after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      var typed = new Typed('#typed-text', {
        strings: [
          "Ethical Hacker",
          "Frontend Developer",
          "Programmer",
          "Linux Administrator",
          "Photo Editor",
          "Blockchain Developer"
        ],
        typeSpeed: 100,     // typing speed in milliseconds
        backSpeed: 50,      // backspacing speed in milliseconds
        backDelay: 1000,    // time to wait before starting to backspace
        loop: true          // loop the animation indefinitely
      });
    });