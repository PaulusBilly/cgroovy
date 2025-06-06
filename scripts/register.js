const form = document.getElementById("registerForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const formError = document.getElementById("formError");

form.addEventListener("submit", function (e) {
  formError.style.display = "none";
  formError.textContent = "";

  const fullname = form.fullname.value.trim();
  const email = form.email.value.trim();
  const age = form.age.value.trim();
  const gender = form.gender.value;
  const pwd = password.value;
  const confirmPwd = confirmPassword.value;

  if (!fullname) {
    e.preventDefault();
    formError.textContent = "Full name is required.";
    formError.style.display = "block";
    form.fullname.focus();
    return;
  }

  if (!email) {
    e.preventDefault();
    formError.textContent = "Email is required.";
    formError.style.display = "block";
    form.email.focus();
    return;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    e.preventDefault();
    formError.textContent = "Please enter a valid email address.";
    formError.style.display = "block";
    form.email.focus();
    return;
  }

  if (!pwd) {
    e.preventDefault();
    formError.textContent = "Password is required.";
    formError.style.display = "block";
    password.focus();
    return;
  } else if (pwd.length < 6) {
    e.preventDefault();
    formError.textContent = "Password must be at least 6 characters.";
    formError.style.display = "block";
    password.focus();
    return;
  }

  if (!confirmPwd) {
    e.preventDefault();
    formError.textContent = "Please confirm your password.";
    formError.style.display = "block";
    confirmPassword.focus();
    return;
  } else if (pwd !== confirmPwd) {
    e.preventDefault();
    formError.textContent = "Passwords do not match.";
    formError.style.display = "block";
    confirmPassword.focus();
    return;
  }

  if (!age) {
    e.preventDefault();
    formError.textContent = "Age is required.";
    formError.style.display = "block";
    form.age.focus();
    return;
  } else if (isNaN(age) || age < 13 || age > 120) {
    e.preventDefault();
    formError.textContent = "Age must be between 13 and 120.";
    formError.style.display = "block";
    form.age.focus();
    return;
  }

  if (!form.gender.value) {
    e.preventDefault();
    formError.textContent = "Please select your gender.";
    formError.style.display = "block";
    return;
  }

  e.preventDefault();
  window.location.href = "index.html";
});
