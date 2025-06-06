const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formError = document.getElementById("formError");
form.addEventListener("submit", function (e) {
  formError.style.display = "none";
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    formError.textContent = "Passwords do not match.";
    formError.style.display = "block";
    confirmPassword.focus();
  }
});
