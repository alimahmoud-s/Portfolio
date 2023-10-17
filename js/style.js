const header = document.querySelector("#navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

//type effict
// Target the element where you want the typing effect
const typedElement = document.getElementById("typed-output");

// Create a new Typed instance
const typed = new Typed(typedElement, {
  strings: ["Hello, It's Me Ali", "I'm a Professional Web Developer."],
  typeSpeed: 40, // Typing speed in milliseconds
  backSpeed: 25, // Backspacing speed in milliseconds
  startDelay: 500, // Delay before typing starts (in milliseconds)
  backDelay: 1000, // Delay before erasing starts (in milliseconds)
  loop: true, // Loop the animation
  cursorChar: "",
});
