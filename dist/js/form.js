const emailLink = document.getElementById("emailLink");
const emailFormOverlay = document.getElementById("emailFormOverlay");
const closeEmailForm = document.getElementById("closeEmailForm");

// Show email form overlay when email link is clicked
emailLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  emailFormOverlay.classList.add("show");
});

// Close email form overlay when close button is clicked
closeEmailForm.addEventListener("click", function () {
  emailFormOverlay.classList.remove("show");
});
