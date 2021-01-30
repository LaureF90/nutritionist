/* function myFunction() {
  alert("Hello! Welcome to Sarah Clark's Nutrition Website! Here you will find all the help you need for a better way of living! =)");
} */


const message =
  "Thank you! I will reply as soon as possible!";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });