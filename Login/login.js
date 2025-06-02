function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  document.getElementById("loginError").textContent = "";
  document.getElementById("signupError").textContent = "";

  if (formType === "signup") {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
  } else {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  }
}
window.addEventListener("beforeunload", () => {
  document.getElementById("loginForm").reset();
  document.getElementById("signupForm").reset();
});


function loginValidate() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  if (!email || !password) {
    error.textContent = "Please fill in all fields.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email.";
    return false;
  }

  error.textContent = "";
  alert("Login successful!");
  return false; // prevent actual submission for demo
}

function signupValidate() {
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirm = document.getElementById("confirmPassword").value.trim();
  const error = document.getElementById("signupError");

  if (!email || !password || !confirm) {
    error.textContent = "Please fill in all fields.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Invalid email format.";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return false;
  }

  error.textContent = "";
  alert("Signup successful!");
  return false;
}
