function toBlack() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Toggle visibility of sun and moon icons based on dark mode
  var sunIcon = document.getElementById("sunIcon");
  var moonIcon = document.getElementById("moonIcon");

  sunIcon.classList.toggle("show");
  moonIcon.classList.toggle("show");
}
