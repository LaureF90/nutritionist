const message =
  "Thank you! I will reply as soon as possible!";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });