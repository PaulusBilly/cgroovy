document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".sign-in-form-container");
  if (!form) return;

  // Create or select error message container
  let errorDiv = document.querySelector(".form-error");
  if (!errorDiv) {
    errorDiv = document.createElement("div");
    errorDiv.className = "form-error";
    errorDiv.style.color = "#ff4d4f";
    errorDiv.style.marginTop = "12px";
    errorDiv.style.display = "none";
    form.appendChild(errorDiv);
  }

  form.addEventListener("submit", function (e) {
    errorDiv.style.display = "none";
    errorDiv.textContent = "";

    const email = form.email.value.trim();
    const password = form.password.value;
    let valid = true;
    let errorMsg = "";

    // Email validation
    if (!email) {
      valid = false;
      errorMsg = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      valid = false;
      errorMsg = "Please enter a valid email address.";
    }

    // Password validation
    if (valid && !password) {
      valid = false;
      errorMsg = "Password is required.";
    }

    if (!valid) {
      e.preventDefault();
      errorDiv.textContent = errorMsg;
      errorDiv.style.display = "block";
      return false;
    }

    // Redirect to index.html on successful validation
    e.preventDefault();
    window.location.href = "index.html";
  });
});
