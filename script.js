const message = "Thank you! I will reply as soon as possible!";
const form = document.getElementById("contactForm")
  form.addEventListener("submit", function (event) {
    event.preventDefault()
    alert(message);
  });